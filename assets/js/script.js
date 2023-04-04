//var userInput;
var correct = 0;
var wrong = 0
var scores;
var time = 60
var questionIndex = 0; //need to know where in sequence of question
var message = "Time is up!";
var words = message.split(' ');
var correctA;

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

const questions = [
    {
        question:"This Legend, known as the GOAT, has won 23 Grand Slams.",
        options: ["Martina Navratilova", "Helen Wills Moody", "Serena Williams", "Steffi Graf", "Venus Williams"],
        correctA: "Serena Williams"
    },
    {
        question:"Tennis is played on this type of surface:",
        options: ["Pitch", "Court", "Track", "Field", "Course"],
        correctA: "Court"  
    },
    {
        question:"This tournament is known as the Happy Slam:",
        options: ["Australian Open","French Open", "Wimbledon", "US Open", "Miami"],
        correctA: "Australian Open"  
    },
    {
        question:"Where does the US Open take place in New York:",
        options: ["Brooklyn", "The Bronx", "Queens", "Manhattan", "Staten Island"],
        correctA: "Queens"  
    },
    {
        question:"Rene Lacoste, played for this country and was known for:",
        options: ["England, Nickname the Crocodile", "France, Lacoste shirt", "United States, Nickname the Rocket", "Germany, winning the Grand Slam", "Spain, the longest rank #1 period"],
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
           mainE1.textContent = message; 
        } else {
            mainE1.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
};

//function to show questions after start button is clicked
function generateQuestion() {
    tennisQuiz.textContent = questions[questionIndex].question;
    document.getElementById("mainQuiz-container").removeAttribute("hidden");
    let quizbody = document.createElement("div");
    quizbody.classList.add("quizbody");

    let question = document.createElement("p");
    question.classList.add("question");
    question.innerHTML = questions[questionIndex].question;
    quizbody.appendChild(question);

    for (let x = 0; x < questions[questionIndex].options.length; x++) {
        console.log(questions[questionIndex].options[x])
        quizbody.innerHTML += `<button id="question-option" class="option-div" onclick="checkAnswer(this)">${questions[questionIndex].options[x]}</button>`;  
    }
    quizContainer.appendChild(quizbody);
};

//Provides next question in line to be answered
function nextQuestion(questionIndex){
    tennisQuiz.textContent = questions[questionIndex].question;
    firstChoice.textContent = questions[questionIndex].options[0];
    secondChoice.textContent = questions[questionIndex].options[1];
    thirdChoice.textContent = questions[questionIndex].options[2];
    fourthChoice.textContent = questions[questionIndex].options[3];
    fifthChoice.textContent = questions[questionIndex].options[4]; 
};

//Compare options
function compareAnswer(CorrectA) {
    //CorrectA = CorrectA.innerText
    if (questions[questionIndex].answer === questiions[questionIndex].options[correctA]) {
        correct++;
        questionIndex++;
    } else {
        time -= 5; // removes 5 seconds from countdown due to wrong answer
    }
    questionIndex++;
    if (questionIndex == questions.length) {
        quizContainer.classList.add("hide")
        finalScores.classList.remove("hide")
        clearInterval(timeLeft);
        displayScore()
    } else {
        nextQuestion(questionIndex);
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

