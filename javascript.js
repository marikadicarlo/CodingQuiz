var currentTime = 60;
var currentScore = 0;
var currentQuestion = 0;

var button = document.getElementById("startGame");
var countdownEl = document.getElementById("timeLeft");
var quizContainer = document.getElementById("quiz");

var questionList = [
    {
    question: "Inside which HTML element do we put the Javascript?",
    choices: ["<script>", "<scripting>", "<javascript>", "<js>"],
    answer: "<script>"
},
    {
    question: "How do you create a function in Javascript?",
    choices: ["function = myFunction()", "function myFunction()", "function:myFunction()"],
    answer: "function myFunction()" 
},
    {
    question: "TRUE or FALSE: The DOM is built into the Javascript language.",
    choices: ["TRUE", "FALSE"],
    answer: "FALSE"
},
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"],
    answer: "Console Log"
},
    {
    question: "What does event.preventDefault() do?",
    choices: ["It stops the browser from reloading the page upon a form submission.", "It stops the browser from allowing the form submission event to occur."],
    answer: "It stops the browser from reloading the page upon a form submission."
},
    {
    question: "How can you add a comment in a JavaScript?",
    choices: ["<!--This is a comment-->", "'This is a comment'", "//This is a comment"],
    answer: "//This is a comment"
},
    {
    question: "The condition of an 'if' / 'else' statement is enclosed within:",
    choices: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
    answer: "Curly Braces",
},
];

button.addEventListener("click", function(event){
    console.log('click');
    event.stopPropagation();
    document.getElementById("startGame").style.display = "none";
    button = setInterval(updateCountdown, 1000),
   showCurrentQuestion();
})

function updateCountdown(event){
    currentTime--;
    countdownEl.innerHTML = (currentTime);

    if (currentTime <= 0){
        alert("Time's Up!");
        quizContainer.innerHTML = "";
        clearInterval(button);
        setTimeout(endGame, 60000);
    }
};

function showCurrentQuestion(){
    var question=questionList[currentQuestion];
    quizContainer.innerHTML="";

    var questionTitle = document.createElement("h2");
    questionTitle.innerText = question.question;
    quizContainer.appendChild(questionTitle);

    var choicesList = document.createElement("ul");

    for (var i=0; i<question.choices.length; i++){
        var questionLi = document.createElement("li");
        questionLi.innerText = question.choices[i];
        choicesList.appendChild(questionLi);
    }

    quizContainer.appendChild(choicesList);
}

quizContainer.addEventListener("click", function(event){
    console.log('answer selected');
    if (event.target.matches("li")) {
        var answerClick = event.target.innerText;

        var question = questionList[currentQuestion];
        if (answerClick===question.answer){
            currentScore++;
            currentTime++;
            currentQuestion++;
            console.log(currentQuestion);
            console.log(questionList.length);
        }
        else{
            currentTime-=5;
            alert("Wrong!");
            currentQuestion++;
            console.log(currentQuestion);
            console.log(questionList.length);
        }
        if (currentQuestion>=questionList.length){
            clearInterval(timeLeft);
            quizContainer.innerHTML ="";
            endGame();
        }
        else{
            showCurrentQuestion();
        }
    }
});

var scoreList = [];
    if (localStorage.getItem("highscores")) {
        scoreList = JSON.parse(localStorage.getItem("highscores"))
    }

function endGame(){
    quizContainer.innerHTML="";
    clearInterval(button);
    var userName = prompt("Enter your initials");
    var currentHighScore = localStorage.getItem("score");

    var info = {
        initials:userName,
        score:currentScore
    }

    scoreList.push(info);
    localStorage.setItem("highscores", JSON.stringify(scoreList));

    // if (currentScore >= currentHighScore){
    //     localStorage.setItem("Score", currentScore);
    //     localStorage.setItem("Name", userName);
    // }

    var scoreDisplay = document.createElement("h1");
    scoreDisplay.innerText=("Your score is" + currentScore);

    quizContainer.appendChild(scoreDisplay);
};