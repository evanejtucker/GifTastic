
$( document ).ready(function() {
// Global Variables
//------------------------------------------------------------------------------

var gifs = ["will ferrell", "family guy", "batman", "pandas", 
			"bruce lee", "dogeball", "anchorman", "finger guns", 
			"falling", "table flip", ];



 
// Functions
//------------------------------------------------------------------------------

// adds buttons for gifs array
gifButtons = function() {

	$("#gifButtonLibrary").empty();

	for (i=0; i<gifs.length; i++) {
        var gifBtn = $("<button>");
        gifBtn.addClass("btn btn-success gifButton");
        gifBtn.attr("giphy", gifs[i]);
        gifBtn.text(gifs[i]);
        $("#gifButtonLibrary").append(gifBtn);
      }
}

// function to display gifs using giphy API
displayGifs = function () {

	var gifName = $(this).attr("giphy");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+gifName+"&api_key=dc6zaTOxFJmzC";

	$.ajax({
		url: queryURL,
		method: "GET",

	}).done(function(response) {
		// $("#gifDisplay").append(JSON.stringify(response));
		$("#gifDisplay").text(response.data[0].url);

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

// click function for gif buttons, displays gifs
$(document).on("click", ".gifButton", displayGifs);

gifButtons();


});