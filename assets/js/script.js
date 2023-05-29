//Global variables
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start");
var questionEl = document.getElementById("question");
var answerListEl = document.getElementById("answers");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var qNum = 0;

//Timer
timerEl.style.visibility = "hidden";
var timeRem;
var quizTimer;
var myTimer = function() {
    timeRem--;
    timerEl.textContent = "Time: " + timeRem;

    if (timeRem <= 0) {
        timeRem = 0;
        timerEl.textContent = "Time's Up!";
        endQuiz();
    }

}

function timer() {
    quizTimer = setInterval(myTimer, 1000);
}

function reduceTimer() {
    clearInterval(timer);
    timeRem = timeRem - 10;
    quizTimer = setInterval(myTimer, 1000);
}

//Start Button Functionality
startButton.addEventListener("click", function() {

    var quizArea = document.getElementById("quizArea");
    quizArea.append(questionEl);
    quizArea.appendChild(answerListEl);

    startButton.style.visibility = "hidden";
    timerEl.style.visibility = "visible";

    timeRem = 30;
    timer();
    question1();
})

// When an answer is clicked
answerListEl.addEventListener("click", function(event) {
    var answer = event.target;
    if (answer.matches(".correct")) {
        qNum++;
    }
    else {
        reduceTimer();
        qNum++;
    }

    if (qNum == 1) {
        question2();
    }
    else if (qNum == 2) {
        question3();
    }
    else if (qNum == 3) {
        question4();
    }
    else if (qNum == 4) {
        question5();
    }

    else {
        endQuiz();
    }
})

//Question 1
function question1() {
    questionEl.textContent = "Which of these HTML tags has the largest default font size?";
    ans1.textContent = "<p>";
    ans2.textContent = "<h1>";
    ans3.textContent = "<h3>";
    ans4.textContent = "<h6>";
    ans2.classList.add("correct");


}

//Question 2
function question2() {
    questionEl.textContent = "var x = 17; What variable type is x?";
    ans1.textContent = "string";
    ans2.textContent = "object";
    ans3.textContent = "number";
    ans4.textContent = "undefined";

    ans2.classList.remove("correct");
    ans3.classList.add("correct");
}

//Question 3
function question3() {
    questionEl.textContent = "var x = 'my variable'; What variable type is x?";
    ans1.textContent = "string";
    ans2.textContent = "object";
    ans3.textContent = "number";
    ans4.textContent = "undefined";

    ans3.classList.remove("correct");
    ans1.classList.add("correct");
}

//Question 4
function question4() {
    questionEl.textContent = "var x; What variable type is x?";
    ans1.textContent = "string";
    ans2.textContent = "object";
    ans3.textContent = "number";
    ans4.textContent = "undefined";

    ans1.classList.remove("correct");
    ans4.classList.add("correct");
}

//Question 5
function question5() {
    questionEl.textContent = "var x = {direction:'north', side:'front'}; What variable type is x?";
    ans1.textContent = "string";
    ans2.textContent = "object";
    ans3.textContent = "number";
    ans4.textContent = "undefined";

    ans4.classList.remove("correct");
    ans2.classList.add("correct");
}

//End of Quiz
function endQuiz() {
    answerListEl.style.visibility = "hidden";
    questionEl.textContent = "Game Over! Score: "+ timeRem;
    clearInterval(timer);
    timerEl.style.visibility = "hidden";

}