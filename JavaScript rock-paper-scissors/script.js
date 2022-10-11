const game = [
    {
        name: "rock",
        win : "scissors",
        lost: "paper",
        emoji: "👊"
    },
    {
        name: "paper",
        win: "rock",
        lost: "scissors",
        emoji: "✋"
    },
    {
        name: "scissors",
        win: "paper",
        lost: "rock",
        emoji: "✌"
    },
]

const place = { rock:0, paper:1, scissors:2 };


function getBotChoice(){
    const randomNum = Math.floor( Math.random() * 3);
    const botChoice = game[randomNum].name;
    return botChoice;
}

function userResult(userChoice, botChoice){
    if ( botChoice === game[ place[userChoice] ].win ) return "You Win!";
    else if (  botChoice === game[ place[userChoice] ].lost ) return "You Lost!";
    return "It's a Draw!";
}




// start reading from here



const options = document.querySelector(".options");

const userScore = document.querySelector(".user-score");
const botScore = document.querySelector(".bot-score");

const currentResults = document.querySelector(".current-results");

const userChoiceDom = currentResults.children[0];
const resultText = currentResults.children[1];
const botChoiceDom = currentResults.children[2];

options.addEventListener("click", (e) => {
    console.log(e.target);

    const userChoice = e.target.classList[0];

    if(! (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") ) return;

    const botChoice = getBotChoice();

    console.log(userChoice, botChoice);

    const result = userResult(userChoice, botChoice);
    console.log(result);

    if(result === "You Win!"){
        userScore.textContent = +userScore.textContent + 1;
    } else if(result === "You Lost!"){
        botScore.textContent = +botScore.textContent + 1;
    } 


    userChoiceDom.textContent = game[ place[userChoice] ].emoji;
    botChoiceDom.textContent = game[ place[botChoice] ].emoji;
    resultText.textContent = result;
    
});

const restart = document.querySelector(".restart");

restart.addEventListener("click", (e) => {
    userChoiceDom.textContent = "❓";
    resultText.textContent = "result";
    botChoiceDom.textContent = "❓";

    if(+userScore.textContent === 0 && +botScore.textContent === 0) {alert("khel to lo!"); return};

    let msg = +userScore.textContent > +botScore.textContent ? "win!" : +botScore.textContent > +userScore.textContent ? "lost!" : "draw!";
    alert(msg);

    userScore.textContent = 0;
    botScore.textContent = 0;

})

