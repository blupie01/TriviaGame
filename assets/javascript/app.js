//variable for questions and answers
var questions = [
	{audio : "assets/audio/FioraPROJECT.taunt01.ogg'",
	guesses : ["Janna", "Vi", "Ahri",
				"Fiora", "Lissandra"],
	answer: 3}, //Fiora
	{audio : "assets/audio/Hecarim.attack5.ogg",
	guesses : ["Thresh", "Garen", "Hecarim",
				"Kallista", "Darius"],
	answer : 2}, //Hecarim
	{audio : "assets/audio/Jhin.tauntTahmKench05.ogg",
	guesses : ["Jhin", "Teemo", "Yasuo", 
				"Draven", "Mordekaiser"],
	answer : 0}, //Jhin
	{audio : "assets/audio/Kindred.tauntEkko01.ogg",
	guesses : ["Sona", "Lux", "Leblanc",
				"Ashe", "Kindred"],
	answer : 4}, //Kindred
	{audio : "assets/audio/Orianna_select.ogg",
	guesses : ["Riven", "Nidalee", "Orianna",
				"Lulu", "Elise"],
	answer : 2}, //Orianna
	{audio : "assets/audio/Rammus_Select.ogg",
	guesses : ["Aatrox", "Rammus", "Graves", 
				"Azir", "Kha'Zix"],
	answer : 1}, //Rammus
	{audio : "assets/audio/ThreshDarkStar.tauntVoidborn01.ogg",
	guesses : ["Maokai", "Ekko", "Fiddlesticks",
				"Thresh", "Malphite"],
	answer : 3}, //Thresh
	{audio : "assets/audio/ZombieBrand.joke.ogg",
	guesses : ["Nautilus", "Olaf", "Trundle", 
				"Brand", "Malzahar"],
	answer : 3} //Brand
];

// other variables
var timer = 30; //set number counter to 30
var counter; // var to hold set interval when countDown() is executed
var ans_correct = 0;
var ans_wrong = 0;

//hide all elements except for start button
$(document).ready(function () {
	$("#timer").hide();
	$("#heroVoice").hide();
	$("#heroChoices").hide();
	$("#noTime").hide();
	$("#submitButton").hide();
});

//function to hide start button and begin game
$("#startButton").on("click", function(){
	$("#timer").show();
	$("#heroVoice").show();
	$("#heroChoices").show();
	$("#submitButton").show();

	startGame();
});

//function to set count down INTERVAL by one second
function countDown() {
	counter = setInterval(decrement, 1000);
}

//clears counter interval
function stop() {
	clearInterval(counter);
}

//function to put count down on screen and call function countDown
//to set interval
function decrement() {
	//decrease timer by one
	timer--;

	//show time left for question in #timer tag
	$("#timer").html("<p>Time Remainging: " + timer + "</p>");
}

//function to make answer buttons in #heroChoices
function makeHeroChoices(questionsIndex) {
	var heroList = questions[questionsIndex].guesses;
	console.log(heroList);
	for (var i = 0; i < heroList.length; i++) {
		$("#heroChoices").append("<button>" + heroList[i] + "</button");
		
		if(i == heroList.length-1) {
			console.log("here");
			$("#heroChoices").append("<button>Submit</button>");
		}
	}
}

//function for game rules and operations
function startGame() {
	$("#startButton").hide();

	countDown();

	//loop through questions array and put to screen
	for (var i = 0; i < questions.length; i++){
		console.log("first for loop");
		console.log(questions[i]);

		makeHeroChoices(i);

		$("")

		if (timer === 0) {
			console.log("here");
			stop();

			// if (i == questions.length-1) {

			// }
		}
	}
}

    //  The decrement function.
    // function decrement() {

      //  Decrease number by one.
      // number--;

      //  Show the number in the #show-number tag.
      // $("#show-number").append("<h2>" + number + "</h2>");


      //  Once number hits zero...
      // if (number === 0) {

        //  ...run the stop function.
        // stop();

        //  Alert the user that time is up.
    //     alert("Time Up!");
    //   }
    // }



function add_audio (test){
	//appending audio tag to #heroVoice
	var audio_link = "'audio/Thresh.tauntVoidborn01.ogg'";
	var audio = $("<audio controls='controls' autoplay></audio>").attr(
					"preload", "metadata").attr("style", "width: 500px;").attr(
					"src", "assets/audio/ThreshDarkStar.tauntVoidborn01.ogg");
	$('#heroVoice').append(audio);
}

// add_audio();
