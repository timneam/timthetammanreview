"use strict"

const userdb = require('../Models/UsersDB');

var UsersDBObject = new userdb();

function routeUser(app){
	app.route('/login')
		.post(UsersDBObject.getLoginCredentials); //check a user login credential
	app.route('/signup')
		.post(UsersDBObject.addUserProfile); //add a user profile
	app.route("/userprofile")
		.get(UsersDBObject.getAllUserProfile);
	app.route('/userprofile/:user_id')
		.put(UsersDBObject.updateUserProfile) //update user profile
		.delete(UsersDBObject.deleteUserProfile) //delete user profile
		.get(UsersDBObject.InnerjoinUserwithReviews);

}

module.exports = {routeUser};