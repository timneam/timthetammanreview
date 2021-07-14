"use strict";

var db = require('../db-connection');
const User = require('../Models/User');

class UsersDB {

    getLoginCredentials(request, respond) {
        var username = request.body.username;
        var password = request.body.password;
        var msg = "";

        var sql = "SELECT password FROM timthetammanreviews.userprofile WHERE username = ?";

        db.query(sql, [username], function(error, result) {
            if (error) {
                throw error;
            } else {
                if (result.length > 0) {
                    if (password == result[0].password) {
                        msg = "1";
                        console.log(msg);
                    } else {
                        msg = "Incorrect username or password";
                        console.log(msg);
                    }
                } else {
                    msg = "User not found!";
                    console.log(msg);
                }
                respond.json(prepareMessage(msg));
            }
        });
    }

    addUserProfile(request, respond) {
        var first_name = request.body.first_name
        var last_name = request.body.last_name
        var date_of_birth = request.body.date_of_birth
        var email = request.body.email
        var username = request.body.username
        var password = request.body.password
        var mobile_number = request.body.mobile_number
        var gender = request.body.gender
        var profile_picture = request.body.profile_picture
        var house_address = request.body.house_address

        var userProfileObject = new User(null, first_name, last_name, date_of_birth, email, username, password, mobile_number, gender, profile_picture, house_address);

        var sql = "INSERT INTO timthetammanreviews.userprofile (first_name, last_name, date_of_birth, email, username, password, mobile_number, gender, profile_picture, house_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var values = [userProfileObject.getFirst_name(), userProfileObject.getLast_name(), userProfileObject.getDate_of_birth(), userProfileObject.getEmail(), userProfileObject.getUsername(),
            userProfileObject.getPassword(), userProfileObject.getMobile_number(), userProfileObject.getGender(), userProfileObject.getProfile_picture(),
            userProfileObject.getHouse_address()
        ];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getAllUserProfile(request, respond) {
        var sql = "SELECT * FROM timthetammanreviews.userprofile";
        db.query(sql, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateUserProfile(request, respond) {

        var userObject = new User(request.params.user_id, request.body.first_name, request.body.last_name, request.body.date_of_birth, request.body.email, request.body.username, request.body.password, request.body.mobile_number, request.body.gender, request.body.profile_picture, request.body.house_address);

        var sql = "UPDATE timthetammanreviews.userprofile SET first_name = ?, last_name = ?, date_of_birth = ?, email = ?, username = ?, password = ?, mobile_number = ?, gender = ?, profile_picture = ?, house_address = ? WHERE user_id = ?";
        var values = [userObject.getFirst_name(), userObject.getLast_name(), userObject.getDate_of_birth(), userObject.getEmail(), userObject.getUsername(), userObject.getPassword(), userObject.getMobile_number(), userObject.getGender(), userObject.getProfile_picture(), userObject.getHouse_address(), userObject.getUser_id()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    deleteUserProfile(request, respond) {
        var user_id = request.params.user_id;
        var sql = "DELETE FROM timthetammanreviews.userprofile WHERE user_id = ?";
        db.query(sql, user_id, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    InnerjoinUserwithReviews(request, respond) {
        var userObject = request.params.user_id;
        var sql = "SELECT username, comment, date_of_post, restaurant_name, rating FROM timthetammanreviews.userprofile INNER JOIN timthetammanreviews.review ON review.customer_id = userprofile.user_id INNER JOIN timthetammanreviews.restaurant ON review.restaurant_id = restaurant._id WHERE user_id = ?";
        db.query(sql, userObject, function(error, result) {
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

module.exports = UsersDB;