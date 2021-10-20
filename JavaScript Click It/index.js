// using easytimer library
const timer = new easytimer.Timer();

const finishTime = document.getElementById("finish-time");

timer.addEventListener("secondTenthsUpdated", (e) => {
  finishTime.innerHTML = timer
    .getTimeValues()
    .toString(["hours", "minutes", "seconds", "secondTenths"]);
});

const squares = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const numOfTargets = 6;

const squareTargets = [];

let achievedTargets = 0;

// generate targets
for (let i = 1; i <= numOfTargets; i++) {
  const index = Math.floor(Math.random() * squares.length);
  const currDoc = document.getElementById(squares[index]);
  currDoc.style.backgroundColor = "black";
  squareTargets.push(currDoc);
}

squareTargets.forEach((target) => {
  target.addEventListener("click", () => {
    target.style.backgroundColor = "red";
    target.style.pointerEvents = "none";
    achievedTargets++;
    checkAchievedTargets(achievedTargets);
  });
});

const squaresDOM = document.getElementById("squares");

squaresDOM.addEventListener("mouseover", () => {
  timer.start({ precision: "secondTenths" });
});

const playAgainBtn = document.getElementById("play-again");

playAgainBtn.addEventListener("click", () => {
  location.reload();
});

const checkAchievedTargets = (num) => {
  if (num === numOfTargets) {
    timer.pause();
    document.getElementById("result-container").style.display = "block";
    finishTime.innerHTML = timer
      .getTimeValues()
      .toString(["hours", "minutes", "seconds", "secondTenths"]);
    // test only
    document.getElementById("squares").style.pointerEvents = "none";
  }
};
