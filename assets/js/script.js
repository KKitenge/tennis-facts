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
var result;
var questionid = 0; //need to know where in sequence of question

var timerE1 = document.getElementById("count"); 
var mainE1 = document.getElementById("countdown");
var tennisQuiz = document.getElementById("tennisQuiz");
var endResult = document.getElementById("results");

var tennisQ = [
    {
        question1:"This Legend, known as the GOAT, has won 23 Grand Slams.",
        answer1: "Martina Navratilova",
        answer2: "Steffi Graf",
        answer3: "Serena Williams",
        answer4: "Helen Wills Moody",
        answer5: "Venus Williams",
        correctA: "Serena Williams"
    },
    {
        question2:"Tennis is played on this type of surface:",
        answer1: "Pitch",
        answer2: "Court",
        answer3: "Field",
        answer4: "Track",
        answer5: "Course",
        correctA: "Court"  
    },
    {
        question3:"This tournament is known as the Happy Slam:",
        answer1: "Australian Open",
        answer2: "French Open",
        answer3: "Wimbledon",
        answer4: "US Open",
        answer5: "Miami",
        correctA: "Australian Open"  
    },
    {
        question4:"Where does the US Open take place in New York:",
        answer1: "Brooklyn",
        answer2: "The Bronx",
        answer3: "Queens",
        answer4: "Manhattan",
        answer5: "Staten Island",
        correctA: "Queens"  
    },
    {
        question5:"Rene Lacoste, played for this country and was known for:",
        answer1: "England, Nickname the Crocodile",
        answer2: "France, Lacoste shirt",
        answer3: "United States, Nickname the Rocket",
        answer4: "Germany, winning the Grand Slam",
        answer5: "Spain, the longest rank #1 period",
        correctA: "QFrance, Lacoste shirt" 
    }
];

//timer countdown from 60 seconds
function countDown(){
    var timeLeft = 60;
    //var downloadTimer = setInterval(function function1() {
    var timeInterval = setInterval(function () {
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

//function to show questions
function generateQuestion() {
    tennisQuiz.textContent = tennisQ[questionid].question;
} 

function programStart() {
    countDown();
    generateQuestion();
}

document.getElementById("startbtn").addEventListener("click", programStart)