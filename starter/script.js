
// This is our API key
var APIKey = "66ac4396710bd690ceec92a550419151";


// This .on("click") function will trigger the fetch() Call
$("#search-button").on("click", function (event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
  
    // Here we grab the text from the input box
    var city = $("#search-input").val();
  
    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    console.log("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=" + APIKey)
  
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        $("#forecast").text(JSON.stringify(data));

      });
});