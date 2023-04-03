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
//var questionid = 0; //need to know where in sequence of question

var timerE1 = document.getElementById('count') 
var mainE1 = document.getElementById('countdown')
var tennisQ = [
    {
        question1:"This Legend, known as the GOAT, has won 23 Grand Slams." ,
        answer1: "Martina Navratilova",
        answer2: "Steffi Graf",
        answer3: "Serena Williams",
        answer4: "Helen Wills Moody",
        answer5: "Venus Williams",
        correctA: "Serena Williams"
    },
    {
        question1:"This Legend, known as the GOAT, has won 23 Grand Slams." ,
        answer1: "Martina Navratilova",
        answer2: "Steffi Graf",
        answer3: "Serena Williams",
        answer4: "Helen Wills Moody",
        answer5: "Venus Williams",
        correctA: "Serena Williams"  
    }

]

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
    var timeLeft = 60;
    var downloadTimer = setInterval(function function1() {
        // document.getElementById("count").innerHTML = timeLeft;

        // timeLeft -=1;
        // if(timeLeft <= 0){
        //     clearInterval(downloadTimer);
        //     document.getElementById("count").innerHTML;
        // }
        // }, 1000);

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
           mainE1.textContent = "Time is up - check your results"; 
        } else {
            mainE1.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
}
function programStart() {
    countDown();
    generateQuestion();
}
document.getElementById("startbtn").addEventListener("click", programStart)
//countDown();

//function timerReset(){
   // document.getElementById("countdown").reset();
//}

//questions and answers- validatation
// function questionAnswer(event){
//     var userInput = event.target.value;
//     console.log(userInput);
//     console.log(event);
//     if (userInput === "Serena Williams"){
//         correct++;
//         document.getElementById("one").style.display = "none";
//         document.getElementById("two").style.display = "block";
//     } else {
//         wrong++;
//         document.getElementById("one").style.display = "none";
//         document.getElementById("two").style.display = "block";
//     }  
//     if (userInput === "Court"){
//         correct++;
// 	  document.getElementById("two").style.display = "none";
//         document.getElementById("three").style.display = "block";
//     } else {
//         wrong++;
// 	  document.getElementById("two").style.display = "none";
//         document.getElementById("three").style.display = "block";
//     }
//      if (userInput === "Australian Open"){
//         correct++;
//         document.getElementById("three").style.display = "none";
//         document.getElementById("four").style.display = "block";
//      } else {
//         wrong++;
//         document.getElementById("three").style.display = "none";
//         document.getElementById("four").style.display = "block";
//     }
//      if (userInput === "Queens"){
//         correct++;
//         document.getElementById("four").style.display = "none";
//         document.getElementById("five").style.display = "block";
//     } else {
//         wrong++;
//         document.getElementById("four").style.display = "none";
//         document.getElementById("five").style.display = "block";
//     }
//      if (userInput === "France, Lacoste shirt"){
//         correct++;
//         document.getElementById("five").style.display = "none";
//         document.getElementById("six").style.display = "block";
//     } else {
//         wrong++;
//         document.getElementById("five").style.display = "none";
//         document.getElementById("six").style.display = "block" ; 
// }}
   
// show the next div after a question is asnwered
    //this function shows and hides the questions after a user answers
//function hideShow(currentid, nextid) {
    //var currentContainer = document.getElementById(currentid);
   // currentContainer.hidden = true;
    //var nextContainer = document.getElementById(nextid);
    //nextContainer.hidden = false;
    //questionid++;
    //console.log(questionid);
//}
