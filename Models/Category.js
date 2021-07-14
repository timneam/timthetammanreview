"use strict"

class category{
    constructor(category_id, restaurant, category){
        this.category_id = category_id;
        this.restaurant = restaurant;
        this.category = category;
    }
    getCategory_id(){
        return this.category_id;
    }
    getRestaurant(){
        return this.restaurant;
    }
    getCategory(){
        return this.category;
    }
    setCategory_id(){
        return this.category_id;
    }
    setRestaurant(){
        return this.restaurant;
    }
    setCategory(){
        return this.category;
    }
}
    module.exports = category;