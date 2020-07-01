

//use the speed reader
//High scores will be stored in local storage
//

// <!-- need a start button
// Thinking i can use object and key pairs for q and a, although I don't like this, not very dry.
// insted of boleans might be able to do a answer question pair insted of a question bolean pair
// Remember to use JSON.stringify() and JSON.parse() to store and retrieve data for local storage

//  -->

//When I press the start button, the start button diapears
let startBtn = document.getElementById("startbtn");
let confirmBtn = document.getElementById("confirmBtn");
let previousBtn = document.getElementById("previousBtn");
let questionLocation = document.getElementById("questionLocation");


startBtn.addEventListener("click", startQuiz);

//starts quze and hides/shows relevent buttons
function startQuiz() {
    startBtn.className ="hideBtn";
    confirmBtn.className="btn btn-primary";
    previousBtn.className="btn btn-primary";
    console.log("Start Button Hidden");
    nextQuestion();

}
//Actions tied to the Confirm button
confirmBtn.addEventListener("click", nextQuestion);


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
    description : "Select 'Hello'",
    answer : "Hello",
    answers :
    [
    "asdasdffff",
    "asasdfffdf",
    "Hello",
    "asdfasdfafsdfasdfadsfadsff"
    ]
}
];
//variable to track current question
let whichQuestion = 0;

//console.log("number of answers in current question "+questions[whichQuestion].answers.length)
console.log("NUmber questions "+questions.length)
console.log("Current question " +whichQuestion)
//console.log("number of answers in current question "+ JSON.stringify(questions[whichQuestion].answers))

console.log()
function nextQuestion() {
    //Sets the which question variable and sets safty
    

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
    whichQuestion++
    if (whichQuestion > questions.length) {
        whichQuestion = questions.length -2;
    };
};



previousBtn.addEventListener("click", previous);
function previous() {
    console.log("Previous clicked")
    whichQuestion--;
    if (whichQuestion < 0) {
        whichQuestion = 0
    };
    console.log(whichQuestion);
    nextQuestion();
};






//Then a question is displayed
//Then the timer is started
// 