//var userInput;
var correct = 0;
var wrong = 0
var result;
var time;
var questionid = 0; //need to know where in sequence of question
var message = "Time is up!";
var words = message.split(' ');

var timerE1 = document.getElementById("count"); 
var mainE1 = document.getElementById("countdown");
var tennisQuiz = document.getElementById("tennisQuiz");
var quizContainer = document.getElementById("mainQuiz-container")
var endResult = document.getElementById("results");
var finalScores = document.getElementById("highLowScores")
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
};

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
};

//function to show questions after start button is clicked
function generateQuestion() {
   // tennisQuiz.textContent = tennisQ[questionid].question; removed as it was causing duplicate question/answer on first question
    document.getElementById("mainQuiz-container").removeAttribute("hidden");
    let quizbody = document.createElement("div");
    quizbody.classList.add("quizbody");

    let question = document.createElement("p");
    question.classList.add("question");
    question.innerHTML = tennisQ[questionid].question;
    quizbody.appendChild(question);

    for (let x = 0; x < tennisQ[questionid].answers.length; x++) {
        console.log(tennisQ[questionid].answers[x])
        quizbody.innerHTML += `<button id="question-option" class="option-div" onclick="checkAnswer(this)">${tennisQ[questionid].answers[x]}</button>`;  
    }
    quizContainer.appendChild(quizbody);
};

//Provides next question in line to be answered
function nextQuestion(){
   tennisQuiz.textContent = tennisQ[questionid].question;
   firstChoice.textContent = tennisQ[questionid].answers[0];
   secondChoice.textContent = tennisQ[questionid].answers[1];
   thirdChoice.textContent = tennisQ[questionid].answers[2];
   fourthChoice.textContent = tennisQ[questionid].answers[3];
   fifthChoice.textContent = tennisQ[questionid].answers[4]; 
};

//Compare answers
function compareAnswer(clicked) {
    //clicked = clicked.innerText
    if (tennisQ[questionid].answer === tennisQ[questionid].answers[correctA]) {
        correct++;
    } else {
        time -= 5; // removes 5 seconds from countdown due to wrong answer
    }
    questionid++;
    if (questionid == questions.length) {
        quizContainer.classList.add("hide")
        finalScores.classList.remove("hide")
        clearInterval(timeLeft);
        displayScore()
    } else {
        nextQuestion(questionid);
    }
};

window.onload=() => {
    let scoresFromStorage=JSON.parse(localStorage.getItem("scores"))
    if (scoresFromStorage) {
        scores = scoresFromStorage
    } else {
        scores = []
    }
};

function programStart() {
    countDown();
    generateQuestion();
    //nextQuestion();
    compareAnswer();
};

document.getElementById("startbtn").addEventListener("click", programStart)

