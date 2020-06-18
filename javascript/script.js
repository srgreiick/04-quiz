

//use the speed reader
//High scores will be stored in local storage
//

// <!-- need a start button
// Thinking i can use object and key pairs for q and a, although I don't like this, not very dry.
// insted of boleans might be able to do a answer question pair insted of a question bolean pair
// Remember to use JSON.stringify() and JSON.parse() to store and retrieve data for local storage

//  -->

//When I press the start button, the start button diapears
var startBtn = document.getElementById("startbtn");
var confirmBtn = document.getElementById("confirmBtn");
var previousBtn = document.getElementById("previousBtn");
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    startBtn.className = "hideBtn";
    confirmBtn.className="btn btn-primary";
    previousBtn.className="btn btn-primary";
    console.log("Start Button Hidden");

}

confirmBtn.addEventListener("click", next);
function next() {
    alert("next question");

}

previousBtn.addEventListener("click", next);
function next() {
    alert("last question");

}

var questions1 = {
    answer : "Hello", 
    question1 : "asdf",
    question2 : "asdf",
    question3 : "asdf",
};







//Then a question is displayed
//Then the timer is started
// 