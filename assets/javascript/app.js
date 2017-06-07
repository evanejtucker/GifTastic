
$( document ).ready(function() {
// Global Variables
//------------------------------------------------------------------------------
var userInput;

var gifs = ["will ferrell", "family guy", "batman", "pandas", 
			"bruce lee", "dogeball", "anchorman", "finger guns", 
			"falling", "table flip" ];





// Functions
//------------------------------------------------------------------------------

gifButtons = function() {
	for (i=0; i<gifs.length; i++) {
        // console.log(letters[i]);
        var gifBtn = $("<button>");
        gifBtn.addClass("btn btn-default gifButton");
        // letterBtn.attr("data-letter", letters[i]);
        gifBtn.text(gifs[i]);
        $("#gifButtonLibrary").append(gifBtn);
      }
}

newGifButton = function(userInput) {
	userInput = $("#exampleInputText1").text();
	alert(userinput);
}




// Main Process
//------------------------------------------------------------------------------

gifButtons();

// this click function will put the user inout into the gif array
$("#gifSubmit").on("click", function() {
        console.log("test");
        newGifButton();
      });



});