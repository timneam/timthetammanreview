"use strict";

var db = require('../db-connection');
const googlemap = require('../Models/GoogleMaps');

class GoogleMapsDB{

    getlocation(request, respond){
        var sql = "SELECT * FROM timthetammanreviews.googlemaps";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    searchForLocation(request,respond){
        var search = '%' + request.params.restaurant_address + '%';
        var sql = "SELECT * FROM timthetammanreviews.googlemaps WHERE googlemaps.restaurant_address LIKE ?"
        db.query(sql, search, function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

}

function prepareMessage(msg){
    var obj = {"message": msg};
    return obj;
}

module.exports = GoogleMapsDB;