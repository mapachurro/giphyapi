
$(document).ready(function () {
  // Use this array to dynamically create buttons on the screen.
  var topics = ["velociraptor", "tyrannosaurus rex", "Ian Malcom", "Dr. Grant", "triceratops", "Dr. Sattler", "pterodactyl", "Jurassic World", "fractals", "chaos theory"];

  function buttonz() {
    for (var i = 0; i < topics.length; i++) {
      var topicBtn = $("<button>");
      topicBtn.addClass("topic-button");
      topicBtn.attr("data-topic", topics[i]);
      topicBtn.text(topics[i]);
      $("#buttons").append(topicBtn);
    }
  };

  buttonz();
  
  //The search box function--adding a new term to the list. 
  //CURRENTLY QUASI-FUNCTIONAL: It adds a button. But then the button 
  //doesn't work the way the rest do, nor do any of the rest.
  $("#find-gif").on("click", function (event) {
    event.preventDefault();
    var userGIF = $("#search-input").val();
    console.log(userGIF)
    topics.push(userGIF);
    console.log(topics);
    $("#buttons").empty();
    buttonz();
  });

  // Create an "on-click" event attached to the ".topic-button" class.
  $('body').on("click", '.topic-button', function () {
    buttonInput = $(this).text();
    console.log(buttonInput);
    getgifz(buttonInput);
  });

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
        var imgCol = $("<div class='col'>"); 
        var imgBox = $("<img>");
        var ratBox = $("<div class='caption'>").append("Rating: " + imageRating);

        imgBox.attr("src", stillURL);
        imgBox.attr("data-still", stillURL);
        imgBox.attr("data-animated", animatedURL);
        imgBox.attr("data-state", "still");
        imgDiv.prepend(imgCol);
        imgCol.prepend(imgBox);
        imgCol.append(ratBox);
      };

      //Set up the animate/deanimate logic.
      $("img").on("click", function () {
        console.log("clicked!")

        var state = $(this).attr("data-state");
        console.log(state);

        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animated"));
          $(this).attr("data-state", "animate");
          console.log("animate!")
        }
        else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
          console.log("deanimate!")
        }
      });
    })
  };
});


// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

// We chose animals for our theme, but you can make a list to your own liking.
//Jurassic Park bruh

// Your app should take the topics in this array and create buttons in your HTML. DONE
// Try using a loop that appends a button for each string in the array. DONE
//This is going to require a loop such as th one used in the refrigerator magnet exercise. YUPPERS

// Your app should take the topics in this array and create buttons in your HTML. DONE
// Try using a loop that appends a button for each string in the array. DONE
//This is going to require a loop such as th one used in the refrigerator magnet exercise. YUPPERS

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. DONE

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing. DONE

// Under every gif, display its rating (PG, G, so on). NOT DONE
//This'll be part of the query... Use object notation to pull it out of the information povided by the API and append it to the HTML

// This data is provided by the GIPHY API.


// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// Deploy your assignment to Github Pages.

// Rejoice! You just made something really cool.