"use strict"

const restaurantdb = require('../Models/RestaurantDB');

var restaurantDBObject = new restaurantdb();

function routeRestaurant(app){
    app.route('/restaurant')
        .get(restaurantDBObject.getAllRestaurants);
    app.route("/restaurantlocations")
        .get(restaurantDBObject.InnerjoinRestaurantGoogleMap);
    app.route("/restaurantwithreviews")
        .get(restaurantDBObject.InnerjoinRestaurantswithreviews);
    app.route("/searchrestaurant/:restaurant_name")
        .get(restaurantDBObject.searchForRestaurant);
    app.route('/toprestaurantsbyavgrating')
        .get(restaurantDBObject.topRestaurantByRating);

}

module.exports = {routeRestaurant};
