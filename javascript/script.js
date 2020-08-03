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
let questionDescription = document.getElementById("question")
let answerOptions = ""
let selectedAnswer = ""

//variable to track current question
let whichQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);

//starts quiz and hides/shows relevant buttons
function startQuiz() {
    startBtn.className = "hideBtn";
    confirmBtn.className = "btn btn-primary";
    previousBtn.className = "btn btn-primary";
    console.log("Start Button Hidden");
    nextQuestion();

}


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
            "asdasdffff",
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

//Actions tied to the Confirm button
confirmBtn.addEventListener("click", next);

//Checks if quiz is over based on text content of confirm button
//Increments whichQuestion variable

function next() {
    if (confirmBtn.textContent === "Finish") {
        console.log("QUiz OVA");
        grade();
        return
    }

    whichQuestion++

    if (whichQuestion >= questions.length) {
        whichQuestion = (questions.length) - 1;
        confirmBtn.textContent = "Finish"
    }
    else {
        confirmBtn.textContent = "Confirm"
        previousBtn.className = "btn btn-primary";
    };
    nextQuestion();
}










function nextQuestion() {
    $(".answerBtn").remove();
    questionDescription.textContent = questions[whichQuestion].description

    //For loop that iterates through questions array and creates a new button for each one
    for (let i = 0; i < questions[whichQuestion].answers.length; i++) {
        let answerOptions = document.createElement("a");
        answerOptions.className = "btn btn-primary answerBtn";
        answerOptions.id = "answer " + i;
        answerOptions.textContent = questions[whichQuestion].answers[i];
        questionLocation.appendChild(answerOptions);
    }

    questionLocation.addEventListener('click', (e) => {
        selectedAnswer = e.target.textContent
        questions[whichQuestion].picked = selectedAnswer
        console.log(questions[whichQuestion].picked + " picked")
    })
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].picked)
    }
};

//Actions tied to the specific answer buttons
document.getElementById("questionLocation").addEventListener("click", function (e) {
    console.log(e.currentTarget);  //<ul><li>...</li><ul>
    console.log(e.target);         //<a href="#">Item 2</a>

    let selectedAnswer = e.target.textContent
    console.log(selectedAnswer)
    console.log(questions[whichQuestion].answer)

});


//Actions tied to the previous button
previousBtn.addEventListener("click", previous);
function previous() {
    console.log("%Current question " + whichQuestion, "color:red")

    whichQuestion--;
    if (whichQuestion < 0) {
        whichQuestion = 0;
        confirmBtn.textContent = "Confirm";
        previousBtn.className = "hideBtn";
    }
    else {
        confirmBtn.textContent = "Confirm"
    };
    previousAction()
    console.log("%cCurrent question " + whichQuestion, "color:red")
};

function previousAction() {
    nextQuestion();
};


function grade() {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].answer == questions[i].picked) {
            score++
        }
        else {
            console.log("ya missed")
        }
        console.log(questions[i].picked + questions[i].answer)
    }




    console.log("You got " + score + "/" + questions.length)

}










//Then a question is displayed
//Then the timer is started
// 