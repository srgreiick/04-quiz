

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
let questionLocation = document.getElementById("question");
let answerOptions = document.getElementById("answeroptions")
let whichQuestion = -1;
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    startBtn.className = "hideBtn";
    confirmBtn.className="btn btn-primary";
    previousBtn.className="btn btn-primary";
    console.log("Start Button Hidden");

}

confirmBtn.addEventListener("click", next);
function next() {
    
    nextQuestion();

}

previousBtn.addEventListener("click", previous);
function previous() {
    whichQuestion--
    if (whichQuestion < 0) {
        whichQuestion = 0
    }
    console.log(whichQuestion)
    

}

let questions = [{
    description : "Select 'Hello'",
    answer : "Hello", 
    question1 : "asdf",
    question2 : "asdf",
    question3 : "Hello",
}

];
console.log()
function nextQuestion() {
    whichQuestion++
    console.log(whichQuestion)
    questionLocation.textContent = questions[whichQuestion].description
    answerOptions.textContent = questions[whichQuestion].question1
    answerOptions.textContent = questions[whichQuestion].question3
    answerOptions.textContent = questions[whichQuestion].question3
}







//Then a question is displayed
//Then the timer is started
// 