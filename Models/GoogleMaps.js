"use strict"

class googlemap{
    constructor(map_id, restaurantname, restaurant_address, _restaurantid, latitude, longtitude){
        this.map_id = map_id;
        this.restaurantname = restaurantname;
        this.restaurant_address = restaurant_address;
        this._restaurantid = _restaurantid;
        this.latitude = latitude;
        this.longtitude = longtitude;
    }
    getMap_id(){
        return this.map_id;
    }
    getRestaurantname(){
        return this.restaurantname;
    }
    getRestaurant_address(){
        return this.restaurant_address;
    }
    get_restaurantid(){
        return this._restaurantid;
    }
    getLatitude(){
        return this.latitude;
    }
    getLongtitude(){
        return this.longtitude;
    }
}
    module.exports = googlemap;