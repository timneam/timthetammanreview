function fetchUsers() {
    var request = new XMLHttpRequest();

    request.open('GET', user_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
        //get all the comments records into our comments array
        user_array = JSON.parse(request.responseText);
    };
    request.send();
}

function newUser() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userprofile").value = "";
    document.getElementById("user_id").value = "";
}
// Submit or send the new comment to the server to be added.
function addUsers() {
    var user = new Object();
    user.user_id = document.getElementById("user_id").value; // Movie title is required by server to create new comment
    user.first_name = document.getElementById("first_name").value; // Value from HTML input text
    user.last_name = document.getElementById("last_name").value; // Value from HTML input text
    user.date_of_birth = document.getElementById("date_of_birth").value; // Change the datePosted to null instead of taking the timestamp on the client side;
    user.email = document.getElementById("email").value;
    user.username = document.getElementById("date_of_birth").value;
    user.password = document.getElementById("password").value;
    user.mobile_number = document.getElementById("mobile_number").value;
    user.gender = document.getElementById("gender").value;
    user.profile_picture = document.getElementById("profile_picture").value;
    user.house_address = document.getElementById("house_address").value;

    var postUsers = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postUsers.open("POST", user_url, true); //Use the HTTP POST method to send data to server

    postUsers.setRequestHeader("Content-Type", "application/json");
    postUsers.onload = function() {
        fetchUsers(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postUsers.send(JSON.stringify(user));
}

function updateUserProfile() {
    var response = confirm("Are you sure you want to update this user?");
    if (response == true) {
        //var commentModal = document.getElementById("editCommentModal");
        var edit_user_url = user_url + "/" + user_array[currentIndex].user_id;
        var updateUser = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        //commentModal.hide();
        updateUser.open("PUT", edit_user_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateUser.setRequestHeader("Content-Type", "application/json");
        user_array[currentIndex].first_name = document.getElementById("editfirst_name").value;
        user_array[currentIndex].last_name = document.getElementById("editlast_name").value;
        user_array[currentIndex].date_of_birth = document.getElementById("editdate_of_birth").value;
        user_array[currentIndex].email = document.getElementById("editemail").value;
        user_array[currentIndex].username = document.getElementById("editusername").value;
        user_array[currentIndex].password = document.getElementById("editpassword").value;
        user_array[currentIndex].mobile_number = document.getElementById("editmobile_number").value;
        user_array[currentIndex].gender = document.getElementById("editgender").value;
        user_array[currentIndex].profile_picture = document.getElementById("editprofile_picture").value;
        user_array[currentIndex].house_address = document.getElementById("edithouse_address").value;
        updateUser.onload = function() {
            fetchUsers();
        };
        updateUser.send(JSON.stringify(user_array[currentIndex]));
    }
}

function deleteUserProfile(element) {
    var response = confirm("Are you sure you want to delete this account?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_user_url = user_url + "/" + user_array[item].user_id;
        var eraseUser = new XMLHttpRequest();
        eraseUser.open("DELETE", delete_user_url, true);
        eraseUser.onload = function() {
            fetchUsers();
        };
        eraseReview.send();
    }
}