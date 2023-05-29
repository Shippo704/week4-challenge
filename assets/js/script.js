var timerEl = document.getElementById("timer");

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

timer();