//var userInput;
var correct = 0;
var wrong = 0
var result;
var questionid = 0; //need to know where in sequence of question
var message = "Time is up!";
var words = message.split(' ');

var timerE1 = document.getElementById("count"); 
var mainE1 = document.getElementById("countdown");
var tennisQuiz = document.getElementById("tennisQuiz");
var endResult = document.getElementById("results");
var firstChoice = document.getElementById("choice1");
var secondChoice = document.getElementById("choice2");
var thirdChoice = document.getElementById("choice3");
var fourthChoice = document.getElementById("choice4");
var fifthChoice = document.getElementById("choice5");

var tennisQ = [
    {
        question:"This Legend, known as the GOAT, has won 23 Grand Slams.",
        answer1: "Martina Navratilova",
        answer2: "Helen Wills Moody",
        answer3: "Serena Williams",
        answer4: "Steffi Graf",
        answer5: "Venus Williams",
        correctA: "Serena Williams"
    },
    {
        question:"Tennis is played on this type of surface:",
        answer1: "Pitch",
        answer2: "Court",
        answer3: "Track",
        answer4: "Field",
        answer5: "Course",
        correctA: "Court"  
    },
    {
        question:"This tournament is known as the Happy Slam:",
        answer1: "Australian Open",
        answer2: "French Open",
        answer3: "Wimbledon",
        answer4: "US Open",
        answer5: "Miami",
        correctA: "Australian Open"  
    },
    {
        question:"Where does the US Open take place in New York:",
        answer1: "Brooklyn",
        answer2: "The Bronx",
        answer3: "Queens",
        answer4: "Manhattan",
        answer5: "Staten Island",
        correctA: "Queens"  
    },
    {
        question:"Rene Lacoste, played for this country and was known for:",
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
    var timeLeft = 15;
    //var downloadTimer = setInterval(function function1() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {//if time left is greater than 1
            timerE1.textContent = timeLeft + " seconds remaining" //shows the time remaining
            timeLeft--; //decreates time by 1
            } else if (timeLeft === 1) { //if time left is equal to 1 shows second instead of seaconds
            timerE1.textContent = timeLeft + " second remaining";
            timeLeft--;
            } else {
            timerE1.textContent = " "; 
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
    document.getElementById("mainQuiz").removeAttribute("hidden");
} 

function nextQuestion(){
   tennisQuiz.textContent = tennisQ[questionid].question;
   choice1.textContent = tennisQ[questionid].answers[0];

}

function programStart() {
    countDown();
    generateQuestion();
}

document.getElementById("startbtn").addEventListener("click", programStart)