
$( document ).ready(function() {
// Global Variables
//------------------------------------------------------------------------------

var gifs = ["will ferrell", "family guy", "batman", "pandas",
			"bruce lee", "dodgeball", "anchorman", "finger guns",
			"falling", "table flip", "facepalm", "high five", "shrek",
			"wink", "crying", "austin powers", "slow motion", "hedgehog", "canada",
			"grand theft auto", "fail", "funny", "laughing", "samuel l jackson",
			"pulp fiction", "ted"  ];






// Functions
//------------------------------------------------------------------------------

// adds buttons for gifs array
gifButtons = function() {

	$("#gifButtonLibrary").empty();

	for (i=0; i<gifs.length; i++) {
    var gifBtn = GifButton(gifs[i]);
    $("#gifButtonLibrary").append(gifBtn);
  }
}

// function to display gifs using giphy API
displayGifs = function () {

  $("#gifDisplay").html('Loading...');
  	var offset = Math.floor(Math.random()*51);
	var gifName = $(this).attr("giphy");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gifName+"&api_key=dc6zaTOxFJmzC&rating=r&sort=relevant&offset="+offset+"&limit=15";
	// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
    $("#gifDisplay").html('');
		var results = response.data;

		for (i=0; i<results.length; i++) {
      		var gifImage = GifDisplay(response.data[i]);
			$("#gifDisplay").prepend(gifImage);
		}

	});

}


// Main Process
//------------------------------------------------------------------------------

//this click function will put the user inout into the gif array
$("#gifSubmit").on("click", function(event) {

        event.preventDefault();

        var newButton = $("#newGifButtons").val();
        gifs.push(newButton);
        gifButtons();
        $("#inputForm").children("input").val("");
      });


function GifButton (btn) {
	  var gifBtn = $("<button>");
	  gifBtn.addClass("btn btn-success gifButton");
	  gifBtn.attr("giphy", btn);
	  gifBtn.text(btn);
	  gifBtn.on('click', displayGifs);
  return gifBtn;
}

function GifDisplay (gif) {
  var playGif = gif.images.fixed_height.url;
  var pauseGif = gif.images.fixed_height_still.url;
  var gifRating = gif.rating;
  var playstate = false;

  var gifElement = $("<div class='gif'></div>")
  var rating = $("<p>rating: " + gifRating+"</p>");
  var gifImage = $("<img></img>");
  gifElement.append(rating);
  gifElement.append(gifImage);
  gifImage.addClass("gifImage");
  gifImage.attr("src", pauseGif);

  	// click to toggle play / pause 
	  gifImage.on('click', function () {
	    if (!playstate) {
	      gifImage.attr("src", playGif);
	    } else {
	      gifImage.attr("src", pauseGif);
	    }
	    playstate = !playstate
	  })

  return gifElement
}


gifButtons();


});
