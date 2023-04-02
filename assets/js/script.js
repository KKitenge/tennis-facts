//Objective
    //Timed quiz
    //Start button starts the timer countdown
    //Start button shows series of questions
    //When question is answered result of user choice is presented
        //If answer is correct, positive affirmation is given and next question in line is presented
        //If answer is incorrect, negative confirmation is given, next question is presented with 5 seconds removed from timer countdown
    //The game is over when all questions are answered or when the timer countdown is 0
    //When the game is over, final results are shown to the player


var userInput;
var correct = 0;
var wrong = 0;
var timer = 60;

var timerE1 = document.getElementById('countdown') 
var mainE1 = document.getElementById('main')
var message = 'Counting down from 60 seconds';
var words = message.split(' ');

//Onclick for start button to begin game
//connect to countdown with message about time left
//tie into countdown

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
function countDown() {
    document.getElementById("startbtn").addEventListener("click", function() {
    var timeLeft = 60;
    var downloadTimer = setInterval(function function1() {
        document.getElementById("countdown").innerHTML = timeLeft;

        timeLeft -=1;
        if(timeLeft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML;
        }
        }, 1000);
        console.log(countDown);

    //setInterval used to call function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {//if time left is greater than 1
            timerE1.textContent = timeLeft + " seconds remaining" //shows the time remaining
            timeLeft--; //decreates time by 1
            } else if (timeLeft === 1) { //if time left is equal to 1 shows second instead of seaconds
            timerE1.textContent = timeLeft + " second remaining";
            timeLeft--;
            } else {
            timerE1.textContent = ""; 
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
})}

function displayMessage() {
    var wordCount = 0;
    var msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
            mainE1.textContent = "Time is up!";
        } else {
            mainE1.textContent = words[wordCount];
            wordCount++;
        }
    }, 500);
}

countDown();

//