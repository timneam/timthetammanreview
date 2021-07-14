"use strict"

var db = require('../db-connection');
const Reviews = require('../Models/Reviews');

class ReviewsDB{

    getAllReviews(request, respond){
        var sql = "SELECT * FROM timthetammanreviews.review";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    getReviewsForARestaurant(request, respond){
        var restaurant_id = request.params.restaurant_id
        var sql = "SELECT * FROM timthetammanreviews.review WHERE restaurant_id = ?";
        db.query(sql,restaurant_id, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    addReviews(request, respond){
        var now = new Date().toLocaleString();
        var reviewsObject = new Reviews(null, request.body.restaurant_id, request.body.customer_id, request.body.comment, request.body.rating, now.toString());
        var sql = "INSERT INTO timthetammanreviews.review (restaurant_id, customer_id, comment, rating, date_of_post) VALUES(?,?,?,?,?)";
        var values = [reviewsObject.getRestaurant_id(), reviewsObject.getCustomer_id(), reviewsObject.getComment(), reviewsObject.getRating(), reviewsObject.getDate_of_post()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
    updateReview(request, respond){
        var now = new Date().toLocaleString();
        var reviewsObject = new Reviews(request.params.review_id, request.body.restaurant_id, request.body.customer_id, request.body.comment, request.body.rating, now.toString());
        var sql = "UPDATE timthetammanreviews.review SET comment = ?, rating = ?, date_of_post = ? WHERE review_id = ?";
        var values = [reviewsObject.getComment(), reviewsObject.getRating(), reviewsObject.getDate_of_post(), reviewsObject.getReview_id()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
    deleteReview(request, respond){
        var reviewID = request.params.review_id;
        var sql = "DELETE FROM timthetammanreviews.review WHERE review_id = ?";
        db.query(sql, reviewID, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }

    InnerjoinUserReviewRestaurant(request,respond){
        var reviewsObject = request.params.review_id;
        var sql = "SELECT username, comment, date_of_post, restaurant_name, rating FROM timthetammanreviews.userprofile INNER JOIN timthetammanreviews.review ON review.customer_id = userprofile.user_id INNER JOIN timthetammanreviews.restaurant ON review.restaurant_id = restaurant._id WHERE review_id = ?";
        db.query(sql, reviewsObject, function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    
}

module.exports = ReviewsDB;