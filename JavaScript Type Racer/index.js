import { samples } from "./samples/samples.js";

// using easytimer library
const timer = new easytimer.Timer();

const finishTime = document.getElementById("finish-time");

timer.addEventListener("secondTenthsUpdated", function (e) {
  finishTime.innerHTML = timer
    .getTimeValues()
    .toString(["hours", "minutes", "seconds", "secondTenths"]);
});

const index = Math.floor(Math.random() * samples.length);

const sample = samples[index];

document.getElementById("sample").innerHTML = sample;

const answerBox = document.getElementById("answer");

answerBox.addEventListener("click", () => {
  timer.start({ precision: "secondTenths" });
});

answerBox.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    checkAnswer(e);
  }
});

const playAgainBtn = document.getElementById("play-again");

playAgainBtn.addEventListener("click", () => {
  location.reload();
});

const checkAnswer = (e) => {
  const answer = e.target.value;

  if (answer === sample) {
    timer.pause();
    answerBox.disabled = true;
    document.getElementById("result-container").style.display = "block";
    finishTime.innerHTML = timer
      .getTimeValues()
      .toString(["hours", "minutes", "seconds", "secondTenths"]);
  }
};
