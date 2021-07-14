function fetchCategory() {
    var request = new XMLHttpRequest();

    request.open('GET', category_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
        //get all the comments records into our comments array
        category_array = JSON.parse(request.responseText);
    };
    request.send();
}

function displayRestaurantsWithCategories() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var i = 0; i < restaurant_array.length; i++) {
        console.log("help la" + restaurant_array[i].restaurant_id)
        if (restaurant_array[i].filter_id == category_array[item].category_id) {
            selectedRestaurantId = restaurant_array[item]._id;
            star = "";
            var restaurantid = restaurant_array[count]._id;
            var thumb = restaurant_array[count].thumb1;
            var title = restaurant_array[count].restaurant_name;
            var cell = '<a href=' + '/restaurants/' + restaurantid + '/>' +
                '<div class="row">' +
                '<div class="column">' +
                '<div class="card">' +
                '<div class="image">' +
                '<img src=' + thumb + ' style=" width: 225px; height: 225px" >' +
                '<div class="middle">' +
                '<a class="moredetailsbutton" href="specific_restaurant.html?id=' + count + '" style="border:solid;">' + 'More Details' + '</a>' +
                +'</div>' +
                '</div>' + '<p align="right" style="width:100px; margin-left:50px; margin-top: 20px;">' + title + '</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</a>';

            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }
    message = restaurantCount + " Restaurants ";
}