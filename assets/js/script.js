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
var quizContainer = document.getElementById("mainQuiz-container")
var endResult = document.getElementById("results");
var firstChoice = document.getElementById("choice1");
var secondChoice = document.getElementById("choice2");
var thirdChoice = document.getElementById("choice3");
var fourthChoice = document.getElementById("choice4");
var fifthChoice = document.getElementById("choice5");

var tennisQ = [
    {
        question:"This Legend, known as the GOAT, has won 23 Grand Slams.",
        answers: ["Martina Navratilova", "Helen Wills Moody", "Serena Williams", "Steffi Graf", "Venus Williams"],
        correctA: "Serena Williams"
    },
    {
        question:"Tennis is played on this type of surface:",
        answers: ["Pitch", "Court", "Track", "Field", "Course"],
        correctA: "Court"  
    },
    {
        question:"This tournament is known as the Happy Slam:",
        answers: ["Australian Open","French Open", "Wimbledon", "US Open", "Miami"],
        correctA: "Australian Open"  
    },
    {
        question:"Where does the US Open take place in New York:",
        answers: ["Brooklyn", "The Bronx", "Queens", "Manhattan", "Staten Island"],
        correctA: "Queens"  
    },
    {
        question:"Rene Lacoste, played for this country and was known for:",
        answers: ["England, Nickname the Crocodile", "France, Lacoste shirt", "United States, Nickname the Rocket", "Germany, winning the Grand Slam", "Spain, the longest rank #1 period"],
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
    document.getElementById("mainQuiz-container").removeAttribute("hidden");
    for (let i of tennisQ) {
        let quizbody = document.createElement("div");
        quizbody.classList.add("quizbody");

        let question = document.createElement("p");
        question.classList.add("question");
        question.innerHTML = i.question;
        quizbody.appendChild(question);

        for (let x = 0; x < i.answers.length; x++) {
            quizbody.innerHTML += `<button id="question-option" class="option-div" onclick="checkAnswer(this)">${i.answers[x]}</button>`;
        }
        quizContainer.appendChild(quizbody);
    }
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

