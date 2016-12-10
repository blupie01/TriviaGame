//variable for questions and answers
var questions = [
	{audio : "assets/audio/FioraPROJECT.taunt01.ogg",
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
var ans_correct = 0;
var ans_wrong = 0;
var question_Index = 0;
var counter;

//hide all elements except for start button
$(document).ready(function () {
	$("#timer").hide();
	$("#heroVoice").hide();
	$("#heroChoices").hide();
	$("#noTime").hide();
});

//function to hide start button and begin game
$("#startButton").on("click", function(){
	$("#timer").show();
	$("#heroVoice").show();
	$("#heroChoices").show();

	startGame();
});

//function to add audio clip for question
function addAudio (audioFile){
	//appending audio tag to #heroVoice
	// var audio_link = questions[audioIndex].audio;
	var audio = $("<audio controls='controls' autoplay></audio>").attr(
					"preload", "metadata").attr("style", "width: 500px;").attr(
					"src", audioFile);
	$('#heroVoice').html(audio);
}

//function to make answer buttons in #heroChoices
function makeHeroChoices(heroArray) {
	for (var i = 0; i < heroArray.length; i++) {
		//create button for hero name
		var button = $("<button id='heroButton'>" + heroArray[i] + "</button>");
		//add data to button
		button.attr("hero_value", i);
		//add button to screen
		$("#heroChoices").append(button);
	}
}

//function to reload
function reset() {
	location.reload();
}

//function for game rules and operations
function startGame() {
	$("#startButton").hide();

	//time per question
	var timer = 30;
	//get question at current index
	var currentAudio = questions[question_Index].audio;
	//get hero choices array at current index
	var heroChoices = questions[question_Index].guesses;
	//get answer at current index
	var answer = questions[question_Index].answer;
	//put time on screen
	var displayTimer = $("#timer").html("<p>Time Remaining: " + timer + "</p>");
	//set counter variable
	counter = setInterval(thirtySecondTimer, 1000);

	//function for thirty second countdown
	function thirtySecondTimer() {
		//if clock reaches 0
		if (timer == 0) {
			clearTimeout(counter);
			$("#heroVoice").empty();
			$("#heroChoices").html("No Time Left");
			setTimeout(reset, 5000);
		}
		else {
			displayTimer.html("<p>Time Remaining: " + timer + "</p>");
			timer--;
		}
	}

	//call function to put audio clip on screen
	addAudio(currentAudio);

	//call function to put choices on screen
	makeHeroChoices(heroChoices);

	$("#heroButton").on("click", function() {
		var selectedAnswer = $(this).attr("hero_value");

		if (selectedAnswer == answer) {
			question_Index++;
			ans_correct++;
			clearTimeout(counter);
			$("#heroChoices").html("<p>Correct!</p>");
			startGame();
		}
		else if (selectedAnswer != answer) {
			question_Index++;
			ans_wrong++;
			clearTimeout(counter);
			$("#heroChoices").html("<p>Wrong!</p>");
			startGame();
		}
	});
}