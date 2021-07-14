"use strict"

const categorydb = require('../Models/CategoryDB');

var CategoryDBObject = new categorydb();

function routeCategory(app){
	app.route('/category')
		.get(CategoryDBObject.getAllCategory); //get all categories
	app.route('/restaurantandcategories')
		.get(CategoryDBObject.getRestaurantAndCategories); //get restaurants with their categories tagged
	app.route("/searchcategory/:category")
		.get(CategoryDBObject.searchForCategory);
}

module.exports = {routeCategory};