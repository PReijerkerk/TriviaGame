$(document).ready(function(){
//Declare Global variables
var timerNumber = 30;
var intervalID;
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var answers= [];
var currentQuestion = 0;
var running = false;
//Objects to hold questions/ answer choices
var trivia = [
    {
        question: "In what month is Harry Potter's birthday?",
        correctAnswer: "July",
        multChoice: ["November", "March", "June", "July"]
    },

    {
        question: "Who was Harry's third Defense Against the Dark Arts Teacher?",
        correctAnswer: "Professor Quirrel",
        multChoice: ["Professor Lockhart", "Professor Snape", "Professor Lupin", "Professor Quirrel"]
    },

    {
        question: "Which language, like Voldemort, is Harry able to speak?",
        correctAnswer: "Parseltongue",
        multChoice: ["Mermish", "Parseltongue", "Elfish", "Troll"]
    },

    {
        question: "Which Quidditch team does Ron support?",
        correctAnswer: "Chudley cannons",
        multChoice: ["Chudley Cannons", "Puddlemore United", "Wimbourne Wasps", "Tutshill Tornados"]
    },

    {
        question: "How many brothers and sisters does Ron have?",
        correctAnswer: "six",
        multChoice: ["Two", "Ten", "Six", "Eight"]
    },

    {
        question: "What is the name of Hagrid's giant brother?",
        correctAnswer: "Grawp",
        multChoice: ["Gawp", "Karkus", "Grawp", "Golgomath"]
    }
];
//Function to write a question to html

var question = function() {
    if (currentQuestion <= 6) {
        $("#question").html(trivia[currentQuestion].question);
            //Displays the answers to the answer IDs
            answers = trivia[currentQuestion].multChoice;
                $("#answer0").html(answers[0]);
                $("#answer1").html(answers[1]);
                $("#answer2").html(answers[2]);
                $("#answer3").html(answers[3]);
            }
};

question();

//Start Button
$(".start").on("click", function() {
    $(".start").hide();
    $(".restart").show();
    question();
    runTimer();
})

//Timer begin
function runTimer() {
    if (!running) {
        intervalID = setInterval(decrement, 1000);
        running = true;
    }
}

//Timer functionality
function decrement() {
    $("#timerHolder").html("<h3>Time Remaining: " + timerNumber + "</h3>");
    timerNumber--;

//stops timer upon reaching 0 seconds remaining
    if(timerNumber === -1) {
        numUnanswered++;
        stop();
        var correctA = trivia[currentQuestion].correctAnswer;
        $("#answerDiv").html("Time has run out! The correct answer is: " +correctA);
    }
}

//Stop timer function
function stop() {
    running = false;
    clearInterval(intervalID);
}

//Restart button
$(".restart").on("click", function() {
    $("#question").empty();
    $("#answer0").empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    stop();
    timerNumber= 30;
    runTimer();
    question(); 
})

//Next Question Button
$(".nextQuestion").on("click", function() {
    currentQuestion++;
    timerNumber=30;
    question();
})








})
