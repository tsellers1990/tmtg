$("#close-button").on("click", function (event) {
	event.preventDefault;
	$(".modal").hide("explode")
})

$("#run-everything-button").on("click", function (event) {
	event.preventDefault;
	var userInput = $("#input").val();
	wikiHow(userInput);
	localStorage.setItem("userInput", userInput);
	$("#input").val("");
});

//wikiHow API
function wikiHow(userInput) {
	console.log(userInput)

	var userInput = userInput
	$.ajax({
		async: true,
		crossDomain: true,
		url: "https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=" + userInput,
		method: "GET",
		headers: {
			"x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
			"x-rapidapi-key": "d8ec69564cmsh8bfdd3439a39718p14736fjsn7795f327adcd"
		}
	}).done(function (response) {
		event.preventDefault;
		console.log(response);
		$("#wikiHow").empty();
		for (var i = 1; i <= userInput; i++) {
			var item = $("<li>").text(response[i]);

			$("#wikiHow").append(item);

		}
		var button = $("<button>").text("All done? Now lets get a drink!")
		$("#wikiHow").append(button).addClass("drinks-button yellow-btn");
		$("#first-display").hide("puff", { direction: "down" }, "slow")
		drinksAPI();
	});
};

// Drinks API

function drinksAPI() {

	var userInputBoxEl = $("#input"); //set this equal to the textbox when it exists again // #10-25
	var drinkTextEl = $("#cocktail-code");
	var drinkImageEl = $("#drink-image");
	var runEverythingButton = $(".drinks-button"); //We need to change this to the actual button when it exists

	var drinksApiInput; //this is the var that goes into the drinksAPI
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic", //there's no documentation for this
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "788f0dc8b3mshe5269bb15e31ff2p135077jsn86a8de28e359"

		}
	}

	$.ajax(settings).done(function (response) {

		runEverythingButton.on("click", function () {
			console.log(response)
			var numberCap = localStorage.getItem("userInput")
			var drinkPicker = Math.floor(Math.random() * numberCap);//gets the number from the input box
			var drinkImage = $("<img>").attr("src", response.drinks[drinkPicker].strDrinkThumb).addClass("start-again");
			var drinkName = response.drinks[drinkPicker].strDrink;

			drinkTextEl.text(`You did it! Go make yourself a ${drinkName}`);
			drinkImageEl.html(drinkImage)
			$(".hero").hide("drop", { direction: "down" }, "slow")
			$("#wikiHow").hide("drop", { direction: "down" }, "slow");
		})
	});

}

$("#drink-image").on("click", ".start-again", function () {
	$(".hero").show();
	$("#first-display").show();
	$("#wikiHow").show().empty();
	$("#cocktail-code, #drink-image").empty();

})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~console.log art
var art1 = "xxxxxxxx                     xxxxx          x          x                     xxxxx          x"
var art2 = "x      x  x   x         xxxx x   x  xxxxx   x             xxxxx  xxxx  xxxx  x   x  xxxxx   x"
var art3 = "x      x  x   x  xxxx   x    xxxxx  x   x  xxx  xxxx   x  x   x  x   x    x  xxxxx  x   x  xxx"
var art4 = "x      x  x   x  x  x   x    x      x   x   x   x  x   x  x   x  x   x    x  x      x   x   x"
var art5 = "xxxxxxxx  xxxxx  xxxxx  x    xxxxx  x   x   x   xxxxx  x  x   x  x        x  xxxxx  x   x   x"
var art6 = "       x             "
var art7 = "       x  "

console.log(art1)
console.log(art2)
console.log(art3)
console.log(art4)
console.log(art5)
console.log(art6)
console.log(art7)


