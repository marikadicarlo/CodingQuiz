var quizContainer = document.getElementById("quiz");

function showHighScores(){

var scoreList = JSON.parse(localStorage.getItem("highscores"));
    for (var i=0; i<scoreList.length; i++){
        var highScores=document.createElement("h3");
        highScores.innerText=(scoreList[i].initials + ": " + scoreList[i].score);
        quizContainer.appendChild(highScores);
    }
}

showHighScores();