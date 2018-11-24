

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=kRcBXTTQnIbH9NYdGXaggMM2onGvBFAR";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  $("#giphy").append("<img src=" + response.data[6].images.downsized.url + "/>")
  console.log(response.data[3].images.downsized);
});


// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

var topics = ["jet", "money", "Dolce & Gabbana", "Gucci", "Louis Vuitton", "yacht", "Ferrari", "Maranello", "St. Tropez", "Egyptian cotton", "poppin' bottles", "Lamborghini Murcielago", 
"Harley-Davidson", "Maserati", "Gallardo", "Welcome to St. Tropez" ];

// We chose animals for our theme, but you can make a list to your own liking.
//WELCOME TO ST. TROPEZ


// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.
//This is going to require a loop such as th one used in the refrigerator magnet exercise.

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// This shouldn't be too challenging, this has to do with configureing the 'limit' parameter in the API query. In terms of placing them on the page,
// I believe it's 'append' that we're looking for here--the one that adds to the html, rather than substituting it

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
//?? I assume this is in the API documentation

// Under every gif, display its rating (PG, G, so on).
//This'll be part of the query... Use object notation to pull it out of the information povided by the API and append it to the HTML

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// Deploy your assignment to Github Pages.

// Rejoice! You just made something really cool.