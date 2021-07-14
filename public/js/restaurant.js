//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);

    //This function will be called when data returns from the web api
    request.onload = function() {
        //get all the movies records into our movie array
        restaurant_array = JSON.parse(request.responseText);
        //call the function so as to display all movies tiles for "Now Showing"
        fetchReviews();
        displayRestaurants();
        addReviews();
        searchRestaurants();
        getUrlForUser();
        fetchCategory();
    };

    //This command starts the calling of the movies web api
    request.send();
}

function getRowRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);

    //This function will be called when data returns from the web api
    request.onload = function() {
        //get all the movies records into our movie array
        restaurant_array = JSON.parse(request.responseText);
        //call the function so as to display all movies tiles for "Now Showing"
        displayRowRestaurants();
    };

    //This command starts the calling of the movies web api
    request.send();
}

function getARestaurantDetails() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);

    //This function will be called when data returns from the web api
    request.onload = function() {
        //get all the movies records into our movie array
        restaurant_array = JSON.parse(request.responseText);
        //call the function so as to display all movies tiles for "Now Showing"
        fetchReviews();
        showRestaurantDetails();
        addReviews();
    };

    //This command starts the calling of the movies web api
    request.send();
}

function getUrlForUser() {
    var url = window.location.href
    var item = url.substring(url.lastIndexOf('=') + 1);
    document.getElementById("user").textContent = item;
    var newURL = "profilepage.html?username=" + item;
    document.getElementById("profile").href = newURL;
}

function searchRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";
    let searcher = document.getElementById("searchARest")

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (restaurant_array[count].restaurant_name.toUpperCase() == searcher.toUpperCase || restaurant_array[count].restaurant_name.substring(0, 1) == searcher.toUpperCase) {
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
    message = " Results for " + '"' + searcher + '"';
}

function displayRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        {
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

function displayRowRestaurants() {
    var table = document.getElementById("restaurantsRows");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        {
            var restaurantid = restaurant_array[count]._id;
            var thumb = restaurant_array[count].thumb1;
            var title = restaurant_array[count].restaurant_name;
            var category = restaurant_array[count].filter_id;
            var restaurantdescription = restaurant_array[count].restaurant_description;
            var openinghours = restaurant_array[count].opening_hours;
            var cell = '<a href=' + '/restaurants/' + restaurantid + '/>' +
                '<div class="container">' +
                '<div class="row">' +
                '<div class="column">' +
                '<div class="card"' + 'style="width: 1100px; height: 200px; margin-left: 10px; padding-bottom: 5%;"' + '>'
            '<div class="middle">' +
            '<a class="moredetailsbutton" href="specific_restaurant.html?id=' + count + 'More Details' + '</a>'
            '</div>' +
            '<table>' +
            '<tr>' +
            '<td>'
            '<img src=' + thumb + 'style="width:170px;height:170px;margin-left:50px; margin-top: 10px;" alt="Card image" , alt="image"' + '>'
            '</td>'
            '<td>'
            '<div class="centerinfo">'
            '<h4>'
            '<b>' + title + '</b>' +
                +'</h4>' +
                '<p>' +
                category +
                '</p>' +
                '<p>' +
                restaurantdescription +
                '</p>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="rightinfo">' +
                '<p>' +
                openinghours +
                '</p>' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '</table0>' +
                '</div>' +
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
//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var url = window.location.href
    console.log(url)
    var item = url.substring(url.lastIndexOf('?id=') + 4);
    console.log(item)
    currentIndex = item;
    console.log(item)
    document.getElementById("restaurantName").textContent = restaurant_array[item].restaurant_name;
    document.getElementById("restaurantDescription").textContent = restaurant_array[item].restaurant_description;
    document.getElementById("openingHours").textContent = restaurant_array[item].opening_hours;
    document.getElementById("address").textContent = restaurant_array[item].address;
    document.getElementById("contactNumber").textContent = restaurant_array[item].contact_number;
    document.getElementById("thumbnail").src = restaurant_array[item].thumb1;
    document.getElementById("thumbnail1").src = restaurant_array[item].thumb1;
    document.getElementById("thumbnail2").src = restaurant_array[item].thumb2;
    document.getElementById("thumbnail3").src = restaurant_array[item].thumb3;
    document.getElementById("filterId").textContent = restaurant_array[item].filter_id;
}