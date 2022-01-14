var beginSection = document.getElementById("begin-section");
var questionSection = document.getElementById("question-section");
var timer = document.getElementById("timer");
timer.innerText = 0
var startBtn = document.querySelector("#startbtn");
var endgame;
timer.innerText = 0
let questions = [
    {
        question: "Do you need to be good at math to be a developer?",
        answer: "No",
        choices:[{ choice: "No" }, { choice: "Yes" }],
    }
]

var beginQuiz  = function () {

    beginSection.classList.add("begin");
    beginSection.classList.remove("end");
    questionSection.classList.add("begin");
    questionSection.classList.add("end");

    startTimer();
    //startQuestions();
};

var startTimer = function () {
    timeLeft = 150;

    var timerIcon = setInterval (function() {
        timer.innerText = timeLeft;
        timeLeft--;
        if (endgame) {
            clearInterval(timerIcon);
        }

        if (timeLeft < 0) {
            showScore();
            timeEl.innerText = 0;
            clearInterval(checkTime);
        }
    }, 1000);


}

startBtn.addEventListener("click", beginQuiz);