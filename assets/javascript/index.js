$(document).ready(function() {
	alert("Welcome to TriviaMania");


//time mechanixs; The player has 15 seconds answer all the questions before it redirects to the endgame. 
var count = 15;
var time = setInterval(counter, 1000);
function counter () {
(count--);
console.log (count);
if (count === 0) { 
alert ("time is up");
endgame();
	}
$("#display").html("Time: " + count); 
}
counter();


//some variables are below, this is incomplete and still some pesudocode. The idea is that the endgame function would 
//compare the user guess and the correctGuess and increase the correct guess by one if it's correct. It would increase lose if it's not correct.


// var correctguess = 0;
// var wrongguess = 0;
// var UserGuess = 0;



// function endgame() {
// if (UserGuess === correctguess) {
// 	correctguess ++;
// }
// else if (UserGuess !== correctguess) // || (UserGuess not filled in) {
// 	{wrongguess ++;
// }
// $("#div").html("Your correct answers" + correctguess);
// $("#div").html("Wrong guess" + wrongguess);
// }

 // questions

 var triviaCards = [{ 
 	questions: "Who is the actor that played green goblin in spiderman's first movie starring topher grace?",
 	answer: ["william dafoe", "topher grace", "john cena", "donald trump"],
 	solutions: 1
 },
 {
 	questions: "What is the 3rd Robin's name in Batman?",
 	answer: ["Dick", "Tim Drake", "Jason Todd", "Damien Wayne"],
	solutions: 3
 }]

 for (var i = 0; i < 4; i++) {
 $("#questions").html(triviaCards.questions[i]);
 $(".radio-inline1").html(" " + triviaCards.answer[i]);
 $(".radio-inline2").html(" " + triviaCards.answer[i]);
 $(".radio-inline3").html(" " + triviaCards.answer[i]);
 $(".radio-inline4").html(" " + triviaCards.answer[i]);
}


// }


// }






	//question2:  "Which Pallet Town gym leader did ash ketchem beat the first time?",
	//answer2: "None", "Misty", "Blaine", "Erika", "Koga",
	//solution2:  "None",
	//question3: "What is the 3rd Robin's name in Batman?",
	//answer3: "Dick", "Tim Drake", "Jason Todd", "Damien Wayne",
	//question4: "What color is google letters (don't cheat)",
	//answer4: "blue, red, yellow, green, blue, red", "blue, yellow, red, green, red, green"; "red, blue, green, yellow, blue, red", " green, blue, red, yellow, red, green"
	//solution4: "blue, red, yellow, green, blue, red"}


//}
//if (UserChoice === triviaCards.solution1) {
//	correctanswer ++;
//} ;





//function counter () {
//console.log (count--);

//if (counter === 0); {
//console.log ("time is up");
//	};
//}

// counter(0);


//$
//	$("option1").html(option1); 
})

