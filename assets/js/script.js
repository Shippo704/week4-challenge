//Global variables
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start");
var restartButton = document.getElementById("restart");
var questionEl = document.getElementById("question");
var answerListEl = document.getElementById("answers");
var scoreList = document.getElementById("scorelist");
var prevscoreEl = document.getElementById("scores");
var prevscoreForm = document.getElementById("enterScore");
var submitButton = document.getElementById("submit");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var qNum = 0;
var score;
var list = [];

restartButton.style.visibility = "hidden";
questionEl.style.visibility = "hidden";
answerListEl.style.visibility = "hidden";
timerEl.style.visibility = "hidden";
scoreList.style.visibility = "hidden";
prevscoreForm.style.visibility = "hidden";

//Timer Functions
var timeRem;
var timer = setInterval(function() {
    timeRem--;
    timerEl.textContent = "Time: " + timeRem;

    if (timeRem <= 0) {
        timeRem = 0;
        clearInterval(myTimer)
        endQuiz();
       }
}, 1000)

function reduceTimer() {
    timeRem = timeRem - 10;
}

//Start Button Functionality
startButton.addEventListener("click", function() {

    var quizArea = document.getElementById("quizArea");
    quizArea.append(questionEl);
    quizArea.appendChild(answerListEl);

    startButton.style.visibility = "hidden";
    timerEl.style.visibility = "visible";
    questionEl.style.visibility = "visible";
    answerListEl.style.visibility = "visible";

    timeRem = 30;
    question1();
})

// When an answer is clicked
answerListEl.addEventListener("click", function(event) {
    var answer = event.target;

    // Answer is correct
    if (answer.matches(".correct")) {
        qNum++;
    }
    // Answer is incorrect
    else {
        reduceTimer();
        qNum++;
    }

    // Navigate to the correct question
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
    score = timeRem;
    if (score<0) {
        score = 0;
    }
    questionEl.textContent = "Game Over! Score: " + score;
    clearInterval(timer);
    timerEl.style.visibility = "hidden";
    prevscoreForm.style.visibility = "visible";
    scoreList.style.visibility = "visible";
}

// Add previous score to list
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var submitName = document.createElement("li");
    var username = document.querySelector("#name").value;
    submitName.textContent = username + " --- " + score;
    prevscoreEl.appendChild(submitName);
    list.push(username + " --- " + score);
    localStorage.setItem("scores", JSON.stringify(list));
    prevscoreForm.style.visibility = "hidden";

    restartButton.style.visibility = "visible";
})

//Play again?
restartButton.addEventListener("click", function() {
    
    restartButton.style.visibility = "hidden";
    timerEl.style.visibility = "visible";
    questionEl.style.visibility = "visible";
    answerListEl.style.visibility = "visible";
    scoreList.style.visibility = "hidden";
    
    timeRem = 30;
    qNum = 0;
    timer = setInterval(function() {
        timeRem--;
        timerEl.textContent = "Time: " + timeRem;
    
        if (timeRem <= 0) {
            timeRem = 0;
            clearInterval(myTimer)
            endQuiz();
           }
    }, 1000);
    question1();
})
