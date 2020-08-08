
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
    description: "Select 'Hello'",
    answer: "Hello",
    answers:
        [
            "asdf",
            "asdf",
            "Hello",
            "asdfff"
        ],
    picked: ""
},
{
    description: "Select 'yes'",
    answer: "yes",
    answers:
        [
            "yes",
            "asasdfffdf",
            "Hello",
            "asdfasdfafsdfasdfadsfadsff"
        ],
    picked: ""
},
{
    description: "Select 'no'",
    answer: "no",
    answers:
        [
            "asdasdffff",
            "lolololo",
            "Hello",
            "amymyfadsff"
        ],
    picked: ""
}
];
//====================== Processes and Functions ======================================

//timer setup that gives you a total time based 
//on the number of questions in the questions object

let secondsLeft = (questions.length *5);
console.log(secondsLeft)
timer.textContent = "You will have "+ secondsLeft +" seconds to complete this test."
let myVar;

//event listener that stores selected answer in the question object and subtracts time from the timer
questionLocation.addEventListener('click', (e) => {
    if (whichQuestion >= questions.length -1) {
        grade()
        return
    }
    selectedAnswer = e.target.textContent
    questions[whichQuestion].picked = selectedAnswer
    console.log(questions[whichQuestion].picked + " picked")
    
    if (questions[whichQuestion].answer == questions[whichQuestion].picked) {
        score++
    }
    else {
        console.log("ya missed")
        secondsLeft-(100);
    }
    

    whichQuestion++
    renderQuestion();
})

let myTimer = function() {
    secondsLeft--;
    console.log(secondsLeft);
    timer.textContent = secondsLeft + " seconds remaining."

    if(secondsLeft === 0) {
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

    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].picked + questions[i].answer)
    } 
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
