function fetchLocation() {
    var request = new XMLHttpRequest();

    request.open('GET', location_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    location_array = JSON.parse(request.responseText);
    };
    request.send();
}