"use strict"

const googlemapdb = require('../Models/GoogleMapsDB');

var GoogleMapsDBObject = new googlemapdb();

function routeGoogleMaps(app){
	app.route('/location')
		.get(GoogleMapsDBObject.getlocation); //get all categories
	app.route("/searchlocation/:restaurant_address")
        .get(GoogleMapsDBObject.searchForLocation);
}

module.exports = {routeGoogleMaps};