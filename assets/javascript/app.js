
$( document ).ready(function() {
// Global Variables
//------------------------------------------------------------------------------

var gifs = ["will ferrell", "family guy", "batman", "pandas",
			"bruce lee", "dogeball", "anchorman", "finger guns",
			"falling", "table flip", "facepalm", "highfive", "shrek",
			"wink", "crying", "slow motion", "hedgehog", "canada",
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
	var gifName = $(this).attr("giphy");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gifName+"&api_key=dc6zaTOxFJmzC&limit=10";

  setTimeout(function () {
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
  }, 2000);
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
