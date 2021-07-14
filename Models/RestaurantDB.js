"use strict"
var db = require('../db-connection');
var Restaurants = require('../Models/Restaurant')

class RestaurantDB{
    getAllRestaurants(request, respond){
        var sql = "SELECT * FROM timthetammanreviews.restaurant";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    InnerjoinRestaurantGoogleMap(request,respond){
        var restaurantObject = new Restaurants(request.params.review_id);
        var sql = "SELECT * FROM timthetammanreviews.googlemaps INNER JOIN timthetammanreviews.restaurant ON googlemaps._restaurantid = restaurant._id ";
        db.query(sql, restaurantObject, function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    InnerjoinRestaurantswithreviews(request,respond){
        var restaurantObject = new Restaurants(request.params.review_id);
        var sql = "SELECT restaurant_name, username, comment, customer_id, date_of_post, rating FROM timthetammanreviews.userprofile INNER JOIN timthetammanreviews.review ON review.customer_id = userprofile.user_id INNER JOIN timthetammanreviews.restaurant ON review.restaurant_id = restaurant._id";
        db.query(sql, restaurantObject, function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    searchForRestaurant(request,respond){
        var searchRestaurant = '%' + request.params.restaurant_name + '%';
        var sql = "SELECT * FROM timthetammanreviews.restaurant WHERE restaurant.restaurant_name LIKE ?"
        db.query(sql, searchRestaurant, function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    topRestaurantByRating(request,respond){
        var sql = "SELECT restaurant_name, AVG(rating) as AverageRating FROM timthetammanreviews.review INNER JOIN timthetammanreviews.restaurant ON restaurant._id = review.restaurant_id GROUP BY restaurant._id ORDER BY AverageRating DESC"
        db.query(sql, function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
  
}

module.exports = RestaurantDB;