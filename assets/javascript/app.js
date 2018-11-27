
  $(document).ready(function() {

//Here's the function for fetching the .gifs. It pulls the name of each button from the .onclick event further below.
function getgifz(buttonInput) { 
  console.log(buttonInput);   
var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + buttonInput + "&api_key=dc6zaTOxFJmzC&limit=10");
console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  //Each one of these appends a different .gif from the data pulled.
  $("#gifs").append("<img src=" + response.data[0].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[1].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[2].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[3].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[4].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[5].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[6].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[7].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[8].images.downsized.url + "/>")
  $("#gifs").append("<img src=" + response.data[9].images.downsized.url + "/>")
  console.log(response.data[3].images.downsized);
});
}




    // Use this array to dynamically create buttons on the screen.
    var topics = ["jet", "money", "Dolce & Gabbana", "Gucci", "Louis Vuitton", "yacht", "Ferrari", "Maranello", "St. Tropez", "Egyptian cotton", "poppin' bottles", "Lamborghini Murcielago", 
"Harley-Davidson", "Maserati", "Gallardo", "Welcome to St. Tropez" ];

    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    // 1. Create a for-loop to iterate through the topics array.
    for (var i = 0; i < topics.length; i++) {
      // 2. Create a variable named "topicBtn" equal to $("<button>");
      var topicBtn = $("<button>");
      // 3. Then give each "topicBtn" the following classes: "topic-button" "topic" "topic-button-color".
      topicBtn.addClass("topic-button topic topic-button-color");
      // 4. Then give each "topicBtn" a data-attribute called "data-topic".
      topicBtn.attr("data-topic", topics[i]);
      // 5. Then give each "topicBtns" a text equal to "topics[i]".
      topicBtn.text(topics[i]);
      // 6. Finally, append each "topicBtn" to the "#buttons" div (provided).
      $("#buttons").append(topicBtn);
    }

    // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "TOPIC" BUTTONS
    // =================================================================================

    // 7. Create an "on-click" event attached to the ".topic-button" class.
    $(".topic-button").on("click", function() {
      buttonInput= $(this).text();
      getgifz(buttonInput);
    }
    );

    // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
    // =================================================================================

    // 12. Create an "on-click" event attached to the "#clear" button id.
    $("#clear").on("click", function() {

      // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
      // We use find here and once its found it will empty the element
      $("#gifs").empty();
    });
  });


// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.



// We chose animals for our theme, but you can make a list to your own liking.
//WELCOME TO ST. TROPEZ

// Your app should take the topics in this array and create buttons in your HTML. DONE
// Try using a loop that appends a button for each string in the array. DONE
//This is going to require a loop such as th one used in the refrigerator magnet exercise. YUPPERS

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. DONE

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing. NOT DONE
//?? I assume this is in the API documentation

// Under every gif, display its rating (PG, G, so on). NOT DONE
//This'll be part of the query... Use object notation to pull it out of the information povided by the API and append it to the HTML

// This data is provided by the GIPHY API.


// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// Deploy your assignment to Github Pages.

// Rejoice! You just made something really cool.