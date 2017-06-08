
$( document ).ready(function() {
// Global Variables
//------------------------------------------------------------------------------
var userInput;

var gifs = ["will ferrell", "family guy", "batman", "pandas", 
			"bruce lee", "dogeball", "anchorman", "finger guns", 
			"falling", "table flip", ];

var selectedGif = "";



// Functions
//------------------------------------------------------------------------------

// adds buttons for gifs array
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

newGifButton = function() {
	userInput = $("#exampleInputText1").val();
	console.log(userInput);
	String(userInput);
	gifs.push(userInput);
	// gifButtons();
}

gifSet = function(selectedGif) {
	selectedGif = gifs[i];
	alert(selectedGif);
}




// Main Process
//------------------------------------------------------------------------------

gifButtons();


// this click function will put the user inout into the gif array
// $("#gifSubmit").on("click", function() {
//         newGifButton();
//         gifButtons();
//       });

$("#gifSubmit").click(function() {
		// gifButtons();
        newGifButton(); 
      });


$("#gifButtonLibrary").on("click", function(event) {
		gifSet(event.curentTarget);
      });

console.log(gifs);


});