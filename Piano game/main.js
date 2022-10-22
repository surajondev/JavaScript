let randomarray = [];

let score = 0;
let i = 0;
let clickedtiles = [];
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

function soundclick() {
  var audio = new Audio();
  audio.src = "mixkit-arcade-game-jump-coin-216.wav";
  audio.play();
}

function gameover() {
  var audio = new Audio();
  audio.src = "mixkit-piano-game-over-1941.wav";
  audio.play();
}

function clicked(Event) {
  soundclick();
  let tile = Event.target.getAttribute("id");

  clickedtiles.push(tile);
  console.log(clickedtiles);

  if (clickedtiles.length === randomarray.length) {
    document.querySelectorAll(".cell").forEach((item) => {
      item.removeEventListener("click", clicked);
    });

    checker();
  }
}

//checks if random array and clicked tiles are same
function checker2() {
  for (let k = 0; k < randomarray.length; k++) {
    //parseint to convert string to an integer
    if (randomarray[k] === parseInt(clickedtiles[k])) {
      if (k + 1 === randomarray.length) {
        return true;
      } else {
        continue;
      }
    } else {
      return false;
    }
  }
}

//checks if length of the random array and clicked tiles are same
//checks boolean of checker2
function checker() {
  if (checker2()) {
    while (clickedtiles.length) {
      //emptying the clickedtiles
      clickedtiles.pop();
    }
    score += 5;
    random();
  } else {
    clearInterval(x);

    gameover();
    savehighscore(score);
    alert("game over.... score scored:" + score);
    document.querySelector(".highscoretable").classList.remove("hide");
    document.getElementById("restart").classList.remove("hide");
    document.getElementById("restart").addEventListener("click", restart);
  }
}

function anime(randomarray) {
  for (let i = 0; i < randomarray.length; i++) {
    setTimeout(() => {
      //removing the animation if it already has
      document.getElementById(randomarray[i]).classList.remove("animate");
      setTimeout(() => {
        console.log("anime added");
        document.getElementById(randomarray[i]).classList.add("animate");

        console.log("event added");
        document.querySelectorAll(".cell").forEach((item) => {
          item.addEventListener("click", clicked);
        });
      }, 2000);
    }, 1000);
  }
}

//add a unique random no.(<36) to the randomarray
function random() {
  let random_no = Math.floor(Math.random() * 36);

  if (randomarray.includes(random_no)) {
    random();
  } else {
    randomarray.push(random_no);
    console.log(randomarray);
    anime(randomarray);
  }
}

function savehighscore(score) {
  const recentscore = {
    name: score.name,
    recentscore: score,
  };
  highscores.push(recentscore);
  highscores.sort((a, b) => b.recentscore - a.recentscore);
  highscores.splice(10);
  localStorage.setItem("highscore", JSON.stringify(highscores));

  console.log(highscores);
  let k = 0;
  console.log(highscores[k].recentscore);
  for (let j = 11; j < 16; j++) {
    if (k < highscores.length) {
      document.getElementById(j).innerHTML = highscores[k].recentscore;
      k += 1;
    } else {
      break;
    }
  }
}

function restart() {
  console.log("restarted");
  document.querySelector(".highscoretable").classList.add("hide");
  document.getElementById("restart").classList.add("hide");

  score = 0;
  while (clickedtiles.length) {
    clickedtiles.pop();
  }
  while (randomarray.length) {
    clickedtiles.pop();
  }
  random();
}


let timesecond = 59
document.getElementById("demo").innerHTML = `00:${timesecond}`;

var x = setInterval(function () {
  timesecond-=1
  document.getElementById("demo").innerHTML =`00:${timesecond}`;

    
  if (timesecond < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    gameover();
    savehighscore(score);
    alert("game over.... score scored:" + score);
    document.querySelector(".highscoretable").classList.remove("hide");
    document.getElementById("restart").classList.remove("hide");
    document.getElementById("restart").addEventListener("click", restart);
  }
}, 1000);

random();
