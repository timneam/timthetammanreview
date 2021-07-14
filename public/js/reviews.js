function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
        //get all the comments records into our comments array
        review_array = JSON.parse(request.responseText);
        showRestaurantReviews();
        addReviews();
    };
    request.send();
}

function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("comment").value = "";
    document.getElementById("customer_id").value = "";
}
// Submit or send the new comment to the server to be added.
function addReviews() {
    var review = new Object();
    review.restaurant_id = restaurant_array[currentIndex].restaurant_id; // Movie title is required by server to create new comment
    review.customer_id = document.getElementById("customer_id").value; // Value from HTML input text
    review.commemt = document.getElementById("comment").value; // Value from HTML input text
    review.date_of_post = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    review.rating = document.getElementById("rating").value;

    var postReviews = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postReviews.open("POST", review_url, true); //Use the HTTP POST method to send data to server

    postReviews.setRequestHeader("Content-Type", "application/json");
    postReviews.onload = function() {
        fetchReviews(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postReviews.send(JSON.stringify(review));
}

//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", popcornBWImage);
    }
    changeStarImage(num, classTarget);
}

function showReviewDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantName").textContent = review_array[item].restaurant_name;
    document.getElementById("customerName").src = review_array[item].customer_id;
    document.getElementById("comment").textContent = review_array[item].comment;
    document.getElementById("ratings").textContent = review_array[item].rating;
    document.getElementById("contactNumber").textContent = review_array[item].contact_number;
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", popcornImage);
            rating = 5;
            break;
    }
}


//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editcustomer_id").value = review_array[item].customer_id;
    document.getElementById("editcomment").value = review_array[item].commemt;
    console.log(review_array[item].rating);
    displayColorPopcorn('editpop', review_array[item].rating);
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateReview() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        //var commentModal = document.getElementById("editCommentModal");
        var edit_review_url = review_url + "/" + review_array[currentIndex].review_id;
        var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        //commentModal.hide();
        updateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateReview.setRequestHeader("Content-Type", "application/json");
        review_array[currentIndex].customer_id = document.getElementById("editcustomer_id").value;
        review_array[currentIndex].commemt = document.getElementById("editcomment").value;
        review_array[currentIndex].rating = rating;
        updateReview.onload = function() {
            fetchReviews();
        };
        updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
}

//This function deletes the selected comment in a specific movie
function deleteReview(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_review_url = review_url + "/" + review_array[item].review_id;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function() {
            fetchReviews();
        };
        eraseReview.send();
    }
}


//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showRestaurantReviews(element) {
    var url = window.location.href
    console.log(url)
    var item = url.substring(url.lastIndexOf('?id=') + 4);
    console.log(item)
    currentIndex = item;
    console.log("this is review" + item)
    document.getElementById("reviewBody").textContent = "";

    // line 177 can change review_array[i].username to user_array[i].username cuz review no user
    console.log(review_array)
    for (var i = 0; i < review_array.length; i++) {
        console.log("help la" + review_array[i].restaurant_id)
        if (review_array[i].restaurant_id == restaurant_array[item]._id) {
            selectedRestaurantId = restaurant_array[item]._id;
            star = "";
            var comment = review_array[i].comment;
            var ratings = review_array[i].rating;
            var customer_name = review_array[i].customer_id;
            var date = review_array[i].date_of_post;
            var cell = '<div class="card">' +
                '<div class="container">' +
                '<p> Review:' + comment + '</p>' +
                '<p> By:' + customer_name + '</p>' +
                '<p> Date posted:' + date.substring(0, 10) + '</p>' +
                '<p> Ratings:' + ratings + '/5 </p>' +
                '</div>' + '</div>';

            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', cell);

            var star = "";
            for (var j = 0; j < review_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/popcorn.png' style='width:50px' />";
            }
        }
    }
}