
$(document).ready(function () {
  // Use this array to dynamically create buttons on the screen.
  var topics = ["velociraptor", "tyrannosaurus rex", "Ian Malcom", "Dr. Grant", "triceratops", "Dr. Sattler", "pterodactyl", "Jurassic World", "fractals", "chaos theory"];
  for (var i = 0; i < topics.length; i++) {
    var topicBtn = $("<button>");
    topicBtn.addClass("topic-button topic topic-button-color");
    topicBtn.attr("data-topic", topics[i]);
    topicBtn.text(topics[i]);
    $("#buttons").append(topicBtn);
  }

  // Create an "on-click" event attached to the ".topic-button" class.
  $(".topic-button").on("click", function () {
    buttonInput = $(this).text();
    getgifz(buttonInput);
  }
  );

  // Provide for a clear button.
  $("#clear").on("click", function () {
    $("#gifs").empty();
  });

  //Here's the function for fetching the .gifs. It pulls the name of each button from the .onclick event further below.
  function getgifz(buttonInput) {
    console.log(buttonInput);
    var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + buttonInput + "&api_key=dc6zaTOxFJmzC&limit=10");
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      for (var g = 0; g < response.data.length; g++) {
        var imgDiv = $("#gifs");
        var stillURL = response.data[g].images.fixed_width_still.url;
        var animatedURL = response.data[g].images.fixed_width.url;
        var imageRating = response.data[g].rating;
        var imgBox = $("<img>");
        var imgRat = $("<p>").text("Rating: " + imageRating);

        imgBox.attr("src", stillURL, animatedURL);
        imgBox.attr("data-state", "still")
        imgRat.attr(imageRating);
        imgDiv.append(imgBox);
        imgDiv.append(imgRat);
        $("#gifs").prepend(imgDiv);
      };

      //Set up the animate/deanimate logic.
      $("<img>").on("click", function () {
        console.log("clicked!")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("src", animatedURL));
          $(this).attr("data-state", "animate");
          console.log("animate!")
        }
        else {
          $(this).attr("src", $(this).attr("src", stillURL));
          $(this).attr("data-state", "still");
          console.log("deanimate!")
        }
      });
    })
  };
})

      //Each one of these appends a different .gif from the data pulled.
      // $("#gifs").append("<br>")
      // $("#gifs").append("<div class='row'>")
      // $("#gifs").append("<img width=250px src=" + response.data[0].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[1].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[2].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[3].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[4].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[5].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[6].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[7].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[8].images.fixed_width_still.url + "/>")
      // $("#gifs").append("<img width=250px src=" + response.data[9].images.fixed_width_still.url + "/>")
      // $("#gifs").append("</div>")
      // console.log(response.data[3].images.downsized);



      //img on-click animation start/stop function

      // $(".img").on("click", function(){
      //   var stateCounter = 0;

      //     if(stateCounter == 0){
      //       stateCounter++;
      //       $(this).attr("src", $(this).attr(response.data[0].images.fixed_width.url))

      //     }





// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.



// We chose animals for our theme, but you can make a list to your own liking.
//Jurassic Park bruh


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