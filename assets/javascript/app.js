$(document).ready(function(){
//Declare Global variables
var timerNumber = 30;
var numCorrect = 0;
var numIncorrect = 0;
var numAnswered = 0;
var answers= [];
var currentQuestion = 0;
//Objects to hold questions/ answer choices
var trivia = [
    {
        question: "In what month is Harry Potter's birthday?",
        correctAnswer: 3,
        multChoice: ["November", "March", "June", "July"]
    },

    {
        question: "Who was Harry's third Defense Against the Dark Arts Teacher?",
        correctAnswer: 3,
        multChoice: ["Professor Lockhart", "Professor Snape", "Professor Lupin", "Professor Quirrel"]
    },

    {
        question: "Which language, like Voldemort, is Harry able to speak?",
        correctAnswer: 1,
        multChoice: ["Mermish", "Parseltongue", "Elfish", "Troll"]
    },

    {
        question: "Which Quidditch team does Ron support?",
        correctAnswer: 0,
        multChoice: ["Chudley Cannons", "Puddlemore United", "Wimbourne Wasps", "Tutshill Tornados"]
    },

    {
        question: "How many brothers and sisters does Ron have?",
        correctAnswer: 2,
        multChoice: ["Two", "Ten", "Six", "Eight"]
    },

    {
        question: "What is the name of Hagrid's giant brother?",
        correctAnswer: 2,
        multChoice: ["Gawp", "Karkus", "Grawp", "Golgomath"]
    }
];
//Function to write a question to html

var question = function() {
    if (currentQuestion <= 6) {
        $("#question").html(trivia[currentQuestion].question);
            answers = trivia[currentQuestion].multChoice;
                for(var i = 0; i < answers.length; i++) {
                    $(".answers + i").html("answers[i]");
                }
    }
};

question();
//Display the question to the questionDiv
//Function to grab the answers to the question
//Display the answers to the answersDiv
//Function to display the 60 second time limit per question
//Function to start the timer when the question loads



})
