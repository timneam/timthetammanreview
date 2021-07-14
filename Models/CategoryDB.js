"use strict";

var db = require('../db-connection');
const category = require('../Models/Category');

class CategoryDB {

    getAllCategory(request, respond) {
        var sql = "SELECT * FROM timthetammanreviews.category";
        db.query(sql, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getRestaurantAndCategories(request, respond) {
        var categorytype = request.params.category
        var sql = "SELECT restaurant._id, restaurant.restaurant_name, restaurant.thumb1, category.category FROM category INNER JOIN restaurant ON restaurant._id = category.restaurant AND category.category = ? ";
        db.query(sql, categorytype, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    searchForCategory(request, respond) {
        var searchCategory = '%' + request.params.category + '%';
        var sql = "SELECT * FROM timthetammanreviews.category WHERE category.category LIKE ?"
        db.query(sql, searchCategory, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

}

function prepareMessage(msg) {
    var obj = { "message": msg };
    return obj;
}

module.exports = CategoryDB;