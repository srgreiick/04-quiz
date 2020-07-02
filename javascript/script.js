//use the speed reader
//High scores will be stored in local storage
// <!-- need a start button
// Thinking i can use object and key pairs for q and a, although I don't like this, not very dry.
// insted of ON.parse() to store and retrieve data for local storage

//  -->

//When I press the start button, the start button diapears
let startBtn = document.getElementById("startbtn");
let confirmBtn = document.getElementById("confirmBtn");
let previousBtn = document.getElementById("previousBtn");
let questionLocation = document.getElementById("questionLocation");
//variable to track current question
let whichQuestion = 0;

startBtn.addEventListener("click", startQuiz);

//starts quze and hides/shows relevent buttons
function startQuiz() {
    startBtn.className ="hideBtn";
    confirmBtn.className="btn btn-primary";
    previousBtn.className="btn btn-primary";
    console.log("Start Button Hidden");
    nextQuestion();

}



//Array of objects that will serve as questions for the test
let questions = [{
    description : "Select 'Hello'",
    answer : "Hello",
    answers :
    [
    "asdf",
    "asdf",
    "Hello",
    "asdfff"
    ]
},
{
    description : "Select 'yes'",
    answer : "yes",
    answers :
    [
    "asdasdffff",
    "asasdfffdf",
    "Hello",
    "asdfasdfafsdfasdfadsfadsff"
    ]
},
{
    description : "Select 'no'",
    answer : "no",
    answers :
    [
    "asdasdffff",
    "lolololo",
    "Hello",
    "amymyfadsff"
    ]
}
];

//console.log("number of answers in current question "+questions[whichQuestion].answers.length)
console.log("NUmber questions "+questions.length)
console.log("Current question " +whichQuestion)
//console.log("number of answers in current question "+ JSON.stringify(questions[whichQuestion].answers))
//Actions tied to the Confirm button
confirmBtn.addEventListener("click", next);
function next() {
    console.log("%cCurrent question " +whichQuestion, "color:red")
    whichQuestion++
    if (whichQuestion >= questions.length) {
        whichQuestion = (questions.length) -1;
        confirmBtn.textContent = "Finish"
    }
    else {
        confirmBtn.textContent = "Confirm"
        previousBtn.className="btn btn-primary";
    };
    nextQuestion();
    console.log("%cCurrent question " +whichQuestion, "color:red")

}

function nextQuestion() {
    console.log("%cCurrent question " +whichQuestion, "color:red")
    $(".answerBtn").remove();

    //For loop that iterates through questions and creates a new button for each one
    for (let i = 0; i < questions[whichQuestion].answers.length; i++) {
        console.log(questions[whichQuestion].answers[i]);
        let answerOptions = document.createElement("a");
        answerOptions.className = "btn btn-primary answerBtn";
        answerOptions.textContent = JSON.stringify(questions[whichQuestion].answers[i]);
        console.log(answerOptions.textContent);
        questionLocation.appendChild(answerOptions);
    };
    //Sets the which question variable and sets safty

    console.log("%cCurrent question " +whichQuestion, "color:red");
};


//Actions tied to the previous button
previousBtn.addEventListener("click", previous);
function previous() {
    console.log("%cCurrent question " +whichQuestion, "color:red")
   
    whichQuestion--;
    if (whichQuestion < 0) {
        whichQuestion = 0;
        confirmBtn.textContent = "Confirm";
        previousBtn.className="greyBtn";
    }
    else{
        confirmBtn.textContent = "Confirm"
    };
    previousAction()
    console.log("%cCurrent question " +whichQuestion, "color:red")
}; 

function previousAction() {
    console.log("Current question " +whichQuestion)
    console.log("Previous clicked")
    console.log("%cCurrent question " +whichQuestion, "color:red");
    nextQuestion();
    console.log("%cCurrent question " +whichQuestion, "color:red");
};






//Then a question is displayed
//Then the timer is started
// 