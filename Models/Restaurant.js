"use strict"

class Restaurant{
    constructor(_id, restaurant_name, restaurant_description, opening_hours, address, contact_number, thumb1, thumb2, thumb3, filter_id){
        this.id = _id;
        this.restaurant_name = restaurant_name;
        this.restaurant_description = restaurant_description;
        this.opening_hours = opening_hours;
        this.address = address;
        this.contact_number = contact_number;
        this.thumb1 = thumb1;
        this.thumb2 = thumb2;
        this.thumb3 = thumb3;
        this.filter_id = filter_id;

    }
    getId(){
        return this.id;
    }
    getRestaurant_name(){
        return this.restaurant_name;
    }
    getRestaurant_description(){
        return this.restaurant_description;
    }
    getOpening_hours(){
        return this.opening_hours;
    }
    getAddress(){
        return this.address;
    }
    getContact_number(){
        return this.contact_number;
    }
    getThumb1(){
        return this.thumb1;
    }
    getThumb2(){
        return this.thumb2;
    }
    getThumb3(){
        return this.thumb3;
    }
    getFiler_id(){
        return this.filter_id;
    }
}
module.exports = Restaurant;