"use strict"

class Reviews{
    constructor(review_id, restaurant_id, customer_id, comment, rating, date_of_post){
        this.review_id = review_id;
        this.restaurant_id = restaurant_id;
        this.customer_id = customer_id;
        this.comment = comment;
        this.rating = rating;
        this.date_of_post = date_of_post;
    }
    getReview_id(){
        return this.review_id;
    }
    getRestaurant_id(){
        return this.restaurant_id;
    }
    getCustomer_id(){
        return this.customer_id;
    }
    getComment(){
        return this.comment;
    }
    getRating(){
        return this.rating;
    }
    getDate_of_post(){
        return this.date_of_post;
    }
    setRestaurant_id(restaurant_id){
        this.restaurant_id = restaurant_id;
    }
    setCustomer_id(customer_id){
        this.customer_id = customer_id;
    }
    setComment(comment){
        this.comment = comment;
    }
    setRating(rating){
        this.rating = rating;
    }
    setDate_of_post(date_of_post){
        this.date_of_post = date_of_post;
    }
}
module.exports = Reviews;