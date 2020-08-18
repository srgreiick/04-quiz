
//======================= Variables and setup =====================
let startBtn = document.getElementById("startbtn");
let questionLocation = document.getElementById("questionLocation");
let questionDescription = document.getElementById("question")
let cell = document.getElementById("cell")
let timer = document.getElementById("timer")
let answerOptions = ""
let selectedAnswer = ""
let finalDiv = document.createElement("a");
finalDiv.textContent = "Quiz over! Thanks you.";
//variable to track current question
let whichQuestion = 0;
//variable to track score for grading
let score = 0;
//Array of objects that will serve as questions for the test
let questions = [{
    description: "What data type os this? True",
    answer: "Boolean",
    answers:
        [
            "Boolean",
            "String",
            "Integer",
            "Statement"
        ],
    picked: ""
},
{
    description: "Which of the following defines a function?",
    answer: "function doTheThing(){}",
    answers:
        [
            "function doTheThing(){}",
            "doTheThing<>",
            "funct.doTheThing()",
            "doTheThing()"
        ],
    picked: ""
},
{
    description: "Which of the following prints 'Hello' to the console ",
    answer: "1",
    answers:
        [
            "1",
            "log-'Hello'",
            "consoleSay 'Hello'",
            "None of the above"
        ],
    picked: ""
}
];
//====================== Processes and Functions ======================================

//timer setup that gives you a total time based 
//on the number of questions in the questions object


let secondsLeft = (questions.length * 5);
console.log(secondsLeft)
timer.textContent = "You will have " + secondsLeft + " seconds to complete this test. Incorrect answerers will reduce time"
let myVar;


//event listener and connected function that stores selected answer in the question object and subtracts time from the timer
questionLocation.addEventListener('click', (e) => {
 
    selectedAnswer = e.target.textContent
    questions[whichQuestion].picked = selectedAnswer
    console.log(questions[whichQuestion].picked + " picked")

    if (questions[whichQuestion].answer == questions[whichQuestion].picked) {
        score++
    }
    else {
        console.log("ya missed")
        secondsLeft -=5;
    }

    if (whichQuestion >= questions.length - 1) {
        grade()
        return
    }
    whichQuestion++
    renderQuestion();
})

let myTimer = function () {
    secondsLeft--;
    console.log(secondsLeft);
    timer.textContent = secondsLeft + " seconds remaining."

    if (secondsLeft < 0) {
        grade();
        return;
    }
};


let startTimer = function () {
    myVar = setInterval(myTimer, 1000);
}



//grades the quiz, clears questions and displays your score
function grade() {
    clearInterval(myVar)
    timer.remove()
    questionDescription.appendChild(finalDiv);
    console.log("You got " + score + "/" + questions.length)

    questionLocation.remove()

    questionDescription.textContent = "You got " + score + "/" + questions.length
}



//function to render questions with text content from "questions" object
function renderQuestion() {
    //clears any currently shown answer options before rendering new ones
    $(".answerBtn").remove();

    console.log(questionDescription.textContent = questions[whichQuestion].description)

    //For loop that iterates through questions array and creates a new button for each one
    for (let i = 0; i < questions[whichQuestion].answers.length; i++) {
        let answerOptions = document.createElement("a");
        answerOptions.className = "btn btn-primary answerBtn";
        answerOptions.id = "answer " + i;
        answerOptions.textContent = questions[whichQuestion].answers[i];
        questionLocation.appendChild(answerOptions);
    }
};





//starts quiz and hides/shows relevant buttons
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    startBtn.className = "hideBtn";
    console.log("Start Button Hidden");
    renderQuestion();
    startTimer();
}



