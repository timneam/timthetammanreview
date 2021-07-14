"use strict"

class users{
    constructor(user_id, first_name, last_name, date_of_birth, email, username, password, mobile_number, gender, profile_picture, house_address){
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.email = email;
        this.username = username;
        this.password = password;
        this.mobile_number = mobile_number;
        this.gender = gender;
        this.profile_picture = profile_picture;
        this.house_address = house_address;
    }
    getUser_id(){
        return this.user_id;
    }
    getFirst_name(){
        return this.first_name;
    }
    getLast_name(){
        return this.last_name;
    }
    getDate_of_birth(){
        return this.date_of_birth;
    }
    getEmail(){
        return this.email;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getMobile_number(){
        return this.mobile_number;
    }
    getGender(){
        return this.gender;
    }
    getProfile_picture(){
        return this.profile_picture;
    }
    getHouse_address(){
        return this.house_address;
    }
    setUser_id(){
        return this.user_id;
    }
    setFirst_name(){
        return this.first_name;
    }
    setLast_name(){
        return this.last_name;
    }
    setDate_of_birth(){
        return this.date_of_birth;
    }
    setEmail(){
        return this.email;
    }
    setUsername(){
        return this.username;
    }
    setPassword(){
        return this.password;
    }
    setMobile_number(){
        return this.mobile_number;
    }
    setGender(){
        return this.gender;
    }
    setProfile_picture(){
        return this.profile_picture;
    }
    setHouse_address(){
        return this.house_address;
    }
}
    module.exports = users;