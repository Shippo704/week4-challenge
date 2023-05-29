//Global variables
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start");
var qNum = 0;

//Setting up questions
var body = document.body;
var questionEl = document.createElement("p");
var answerListEl = document.createElement("ul");
var ans1 = document.createElement("li");
var ans2 = document.createElement("li");
var ans3 = document.createElement("li");
var ans4 = document.createElement("li");

//Default text
questionEl.textContent ="Question:";
ans1.textContent = "answer 1";
ans2.textContent = "answer 2";
ans3.textContent = "answer 3";
ans4.textContent = "answer 4";

//Joining all answers into one element
answerListEl.appendChild(ans1);
answerListEl.appendChild(ans2);
answerListEl.appendChild(ans3);
answerListEl.appendChild(ans4);

//Timer
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

//Start Button Functionality
startButton.addEventListener("click", function() {

    var quizArea = document.getElementById("quizArea");
    quizArea.append(questionEl);
    quizArea.appendChild(answerListEl);

    startButton.style.visibility = "hidden";

    question1();
})

//Question 1
function question1() {
    questionEl.textContent = "Which of these HTML tags has the largest default font size?";
    ans1.textContent = "<p>";
    ans2.textContent = "<h1>";
    ans3.textContent = "<h3>";
    ans4.textContent = "<h6>";

    //check the answer
    answerListEl.addEventListener("click", function(event) {
        var answer = event.target;
        if (answer == ans2) {
            question2();
        }
        else {
            timerEl.timeLeft = timerEl.timeLeft - 10;
            question2();
        }
    })
}

//Question 2
function question2() {
    questionEl.textContent = "var x = 17; What variable type is x?";
    ans1.textContent = "string";
    ans2.textContent = "object";
    ans3.textContent = "number";
    ans4.textContent = "undefined";

    //check the answer
    answerListEl.addEventListener("click", function(event) {
        var answer = event.target;
        if (answer == ans3) {
            question3();
        }
        else {
            timerEl.timeLeft = timerEl.timeLeft - 10;
            question3();
        }
    })
}

//Question 3
function question3() {
    questionEl.textContent = "var x = 'my variable'; What variable type is x?";
    ans1.textContent = "string";
    ans2.textContent = "object";
    ans3.textContent = "number";
    ans4.textContent = "undefined";

    //check the answer
    answerListEl.addEventListener("click", function(event) {
        var answer = event.target;
        if (answer == ans1) {
            question4();
        }
        else {
            timerEl.timeLeft = timerEl.timeLeft - 10;
            question4();
        }
    })
}

//Question 4
function question4() {
    questionEl.textContent = "var x; What variable type is x?";
    ans1.textContent = "string";
    ans2.textContent = "object";
    ans3.textContent = "number";
    ans4.textContent = "undefined";

    //check the answer
    answerListEl.addEventListener("click", function(event) {
        var answer = event.target;
        if (answer == ans4) {
            question5();
        }
        else {
            timerEl.timeLeft = timerEl.timeLeft - 10;
            question5();
        }
    })
}

//Question 5
function question5() {
    questionEl.textContent = "var x = {direction:'north', side:'front'}; What variable type is x?";
    ans1.textContent = "string";
    ans2.textContent = "object";
    ans3.textContent = "number";
    ans4.textContent = "undefined";

    //check the answer
    answerListEl.addEventListener("click", function(event) {
        var answer = event.target;
        if (answer == ans2) {
            endQuiz();
        }
        else {
            timerEl.timeLeft = timerEl.timeLeft - 10;
            endQuiz();
        }
    })
}

function endQuiz() {
    answerListEl.style.visibility = "hidden";
    questionEl.textContent = "Game Over!";
}

//Start Timer
timer();