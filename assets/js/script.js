var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start");
var qNum = 0;

var body = document.body;
var questionEl = document.createElement("p");
var answerListEl = document.createElement("ul");
var ans1 = document.createElement("li");
var ans2 = document.createElement("li");
var ans3 = document.createElement("li");
var ans4 = document.createElement("li");

questionEl.textContent ="Question:";
ans1.textContent = "answer 1";
ans2.textContent = "answer 2";
ans3.textContent = "answer 3";
ans4.textContent = "answer 4";

answerListEl.appendChild(ans1);
answerListEl.appendChild(ans2);
answerListEl.appendChild(ans3);
answerListEl.appendChild(ans4);

function timer() {
    var timeLeft = 90;

    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: "+ timeLeft;

        if (timeLeft == 0){
            clearInterval(timeInterval);
            timerEl.textContent = "Time's Up!"
        }
    }, 1000)
}

startButton.addEventListener("click", function() {

    var quizArea = document.getElementById("quizArea");
    quizArea.append(questionEl);
    quizArea.appendChild(answerListEl);

    startButton.style.visibility = "hidden";
})

function question1() {
    
}


timer();