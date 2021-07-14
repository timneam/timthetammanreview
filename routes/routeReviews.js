"use strict"

const reviewsdb = require('../Models/ReviewsDB');

var reviewsDBObject = new reviewsdb();

function routeReviews(app){
    app.route('/reviews')
        .post(reviewsDBObject.addReviews) //add reviews
        .get(reviewsDBObject.getAllReviews); //get all the reviews
    app.route('/reviews/:review_id')
        .delete(reviewsDBObject.deleteReview) //delete reviews
        .put(reviewsDBObject.updateReview) //update reviews\
        .get(reviewsDBObject.InnerjoinUserReviewRestaurant);
    app.route('/reviewsforarestaurant/:restaurant_id')
        .get(reviewsDBObject.getReviewsForARestaurant);

}
module.exports = {routeReviews};
