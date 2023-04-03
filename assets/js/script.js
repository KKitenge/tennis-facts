//Objective
    //Timed quiz
    //Start button starts the timer countdown
    //Start button shows series of questions
    //When question is answered result of user choice is presented
        //If answer is correct, positive affirmation is given and next question in line is presented
        //If answer is incorrect, negative confirmation is given, next question is presented with 5 seconds removed from timer countdown
    //The game is over when all questions are answered or when the timer countdown is 0
    //When the game is over, final results are shown to the player


//var userInput;
var correct = 0;
var wrong = 0
var questionid = 1; //need to know where in sequence of question
var timer;
//Questions
//var question = document.querySelectorAll()



var timerE1 = document.getElementById('count') 
var mainE1 = document.getElementById('countdown')
//var message = 'Time is up!';
//var words = message.split(' ');

//Start button to begin the game
//document.getElementById("startbtn").addEventListener("click", function() {
    //var timeLeft = 60;
    //var downloadTimer = setInterval(function function1() {
       // document.getElementById("countdown").innerHTML = timeLeft;

       // timeLeft -=1;
       // if(timeLeft <= 0){
           // clearInterval(downloadTimer);
           // document.getElementById("countdown").innerHTML;
       // }
       // }, 1000);

       // console.log(countDown);
//});

//timer countdown from 60 seconds
function countDown(){
    document.getElementById("startbtn").addEventListener("click", function() {
    var timeLeft = 60;
    var downloadTimer = setInterval(function function1() {
        document.getElementById("count").innerHTML = timeLeft;

        timeLeft -=1;
        if(timeLeft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("count").innerHTML;
        }
        }, 1000);

    //setInterval used to call function to be executed every 1000 milliseconds
    //var timeInterval = setInterval(function () {
        if (timeLeft > 1) {//if time left is greater than 1
            timerE1.textContent = timeLeft + " seconds remaining" //shows the time remaining
            timeLeft--; //decreates time by 1
            } else if (timeLeft === 1) { //if time left is equal to 1 shows second instead of seaconds
           timerE1.textContent = timeLeft + " second remaining";
            timeLeft--;
            } else {
            timerE1.textContent = "Time is up - check your results"; 
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

function displayMessage() {
    var wordCount = 0;
    var msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
           mainE1.textContent = "Time is up - check your results"; //duplication of var message
        } else {
            mainE1.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
}
countDown();

//function timerReset(){
   // document.getElementById("countdown").reset();
//}

//questions and answers- validatation
function questionAnswer(event){
    var userInput = event.target.value;
    console.log(userInput);
    if (userInput === "Serena Williams"){
        correct++;
    } else {
        wrong++;
    } 
    if (questionid == 1) hideShow("one", "two")//after one is clicked, it jumps to second div

    if (userInput === "Court"){
        correct++;
    } else {
        wrong++;
    }
    if (questionid == 2) hideShow("two", "three")

    if (userInput === "Australian Open"){
        correct++;
    } else {
        wrong++;
    }
    if (questionid == 3) hideShow("three", "four")

    if (userInput === "Queens"){
        correct++;
    } else {
        wrong++;
    }
    if (questionid == 4) hideShow("four", "five")

    if (userInput === "France, Lacoste shirt"){
        correct++;
    } else {
        wrong++;
    }
   
    }
   
// show the next div after a question is asnwered
function hideShow(currentid, nextid) {
    var currentContainer = document.getElementById(currentid);
    currentContainer.hidden = true;
    var nextContainer = document.getElementById(nextid);
    nextContainer.hidden = false;
    questionid++;
    console.log(questionid)
    //this function shows and hides the questions after a user answers
}
