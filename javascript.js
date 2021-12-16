var currentTime = 60;
var currentScore = 0;
var currentQuestion = 0;

var button = document.getElementById("startGame");
var countdownEl = document.getElementById("timeLeft");
var quizContainer = document.getElementById("quiz");

var questionList = [
    {
    question: "Inside which HTML elemtn do we put the Javascript?",
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
    question: "What does event.preventDefault() do?",
    choices: ["It stops the browser from reloading the page upon a form submission.", "It stops the browser from allowing the form submission event to occur."],
    answer: "It stops the browser from reloading the page upon a form submission."
},
    {
    question: "How can you add a comment in a JavaScript?",
    choices: ["<!--This is a comment-->", "'This is a comment'", "//This is a comment"],
    answer: "//This is a comment"
}
];

button.addEventListener("click", function(event){
    console.log('click');
    event.stopPropagation();
    document.getElementById("startGame").style.display = "none";
    clear = setInterval(updateCountdown, 1000),
   showCurrentQuestion();
})

// function updateCountdown(event){
//     currentTime--;
//     countdown.innerHTML = ("Time Remaining" + currentTime);

//     if (currentTime == 0){
//         alert("Time's Up!");
//         quizContainer.innerHTML = "";
//         clearInterval(clear);
//         endGame();
//     }
// };

// function showCurrentQuestion(){
//     var question=questionList[currentQuestion];
//     quizContainer.innerHTML="";

//     var questionTitle = document.createElement("h1");
//     questionTitle.innerText = question.question;
//     quizContainer.appendChild(questionTitle);

//     var choicesList = document.createElement("ul");

//     for (var i=0; i=question.choices.length; i++){
//         var questionLi = document.createElement("li");
//         questionLi.innerText = question.choices[i];
//         choicesList.appendChild(questionLi);
//     }

//     quizContainer.appendChild(choicesList);
// }

// quizContainer.addEventListener("click", function(event){
//     if (event.target.matches("li")) {
//         var answerClick = event.target.innerText;

//         var question = questionList[currentQuestion];
//         if (answerClick===question.answer){
//             currentScore++;
//             currentTime++;
//         }
//         else{
//             currentTime-=5;
//             alert("Wrong!");
//             currentQuestion++;
//         }
//         if (currentQuestion>=questionList.length){
//             clearInterval(clear);
//             quizContainer.innerHTML ="";
//             endGame();
//         }
//         else{
//             showCurrentQuestion();
//         }
//     }
// });

// function endGame({
//     countdown.innerHTML-"";
//     var userName = prompt("Enter your initials");
//     var currentHighScore = localStorage.getItem("score");

//     if (currentScore >= currentHighScore){
//         localStorage.setItem("Score", currentScore);
//         localStorage.setItem("Name", userName);
//     }

//     var scoreDisplay = document.createElement("h1");
//     scoreDisplay.innerText=(userName + "Your score is" + currentScore);

//     quizContainer.appendChild(scoreDisplay);

//     showHighScores();
// });

// function showHighScores(){
//     var currentHighScore = localStorage.getItem("Score");
//     var userName = localStorage.getItem("Name");

//     if (currentHighScore && userName){
//         var highScores=document.createElement("h3");
//         highScores.innerText=("Highest Score" + userName + "" +currentHighScore);
//         quizContainer.appendChild(highScores);
//     }
// }