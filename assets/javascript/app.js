$(document).ready(function(){
//Declare Global variables
var timerNumber = 30;
var intervalID;
var numCorrect = 0;
var numIncorrect = 0;
var answers= [];
var currentQuestion = 0;
var running = false;
var answerHolder = $("#answerHolder");
var questionHolder = $("#question");
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
        correctAnswer: "Chudley Cannons",
        multChoice: ["Chudley Cannons", "Puddlemore United", "Wimbourne Wasps", "Tutshill Tornados"]
    },

    {
        question: "How many brothers and sisters does Ron have?",
        correctAnswer: "Six",
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
    if (currentQuestion <= trivia.length -1) {
        $("#question").html(trivia[currentQuestion].question);
            //Displays the answers to the answer IDs
            answers = trivia[currentQuestion].multChoice;
                for(var i = 0; i < answers.length; i++) {
                var input = '<label class="label"><input type="radio" name="q' + currentQuestion + '" value="' + answers[i] + '" >'+ answers[i] +'</label>';
                    answerHolder.append(input);
                }
            }
};

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
        stop();
        var correctA = trivia[currentQuestion].correctAnswer;
        $("#answerHolder").html("Time has run out! The correct answer is: " +correctA); 
        handleAnswers();
    }
}

//Stop timer function
function stop() {
    running = false;
    clearInterval(intervalID);
}

//Restart button
//calls the clearCurrent function
//sets currentQuestion to index0; timerNumber back to 30 seconds; resets numCorrect and numIncorrect to 0; starts the timer and writes the question at index0
$(".restart").on("click", function() {
    clearCurrent();
    currentQuestion = 0;
    stop();
    timerNumber= 30;
    numCorrect= 0;
    numIncorrect = 0;
    runTimer();
    question(); 
})

//Submits the selected button from the form into the handleNextQ function
$(".form").on("submit", handleNextQ) 

// function that handles the nextQuestion button
//prevents the page from reloading
//handles the event and passes it into the handleAnswers function
//increased the index of the currentQuestion var
//resets timer to 30seconds
//calls the clearCurrent function
//calls the question function to display the next question and answers
//Starts the timer decrement
//If currentQuestion = 6 turns off the nextQuestion button; inputs the Game over html screen; stops the timer/ empties the timer html; hides the next question button;
function handleNextQ(event) {
    event.preventDefault();
    handleAnswers(event);
    currentQuestion++;
    timerNumber=30;
    clearCurrent();
    question();
    runTimer();
    if (currentQuestion === trivia.length) {
        $(".form").off("submit", handleNextQ);
        $("#answerHolder").html("Thank you for playing! Try again for a better score.");
        stop();
        $("#timerHolder").empty();
        $(".nextQ").hide();
    }
}
//Function to clear both the answerHolder and questionHolder
function clearCurrent() {
    answerHolder.empty();
    questionHolder.empty();
}

//Compares the value of the selected answer in the form and compares it to the correct answer for the question; if correct increments the numCorrect else increments the numIncorrect; displays both numCorrect and NumIncorrect to the html
function handleAnswers(e) {
    if(e.target['q'+currentQuestion].value === trivia[currentQuestion].correctAnswer) {
        numCorrect++;
    }
    else {
        numIncorrect++;
    }
    console.log("Correct: " + numCorrect);
    console.log("Incorrect: " + numIncorrect);

    $("#correct").html(numCorrect);
    $("#incorrect").html(numIncorrect);
}










})
