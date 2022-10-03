var canvas = document.getElementById("can");                 
var ctx = canvas.getContext("2d");
level = 0
var Brickimg = new Image();

        
function reset() {       
    document.location.reload()     
}

//Audio assets
const game_start = new Audio('start_game.mp3');                      
const bounce_wall = new Audio('bounce_wall.mp3');                          
const bounce_paddle = new Audio('paddle_drop.mp3');
const break_brick = new Audio('break_brick.wav');
const paddle_drop = new Audio('paddle_drop_2.mp3');

// Level generation preparation
rightPressed = false
leftPressed = false
speed = 0
var brickRowCount = 0;
var brickColumnCount = 0;
brickcount = 0
a = document.querySelectorAll(".high-score")
for (b of a) {
    b.innerText = 0;
}

function level1() {
    game_start.play();

    brickRowCount = 4;
    brickColumnCount = 10;
    brickcount = 0
    Brickimg.src = "creeper.jpg"


    generateBricksLev1()
    score = 0
    speed = 2
    level = 1
    ball.dx = speed / 2
    ball.dy = -speed / 2
    document.getElementById("load-screen").classList.add("remove-load-screen")

}

function level2() {
    game_start.play();
    brickRowCount = 6;
    brickColumnCount = 10;
    brickcount = 0

    Brickimg.src = "creeper.jpg"
    generateBricksLev2()
    score = 0
    speed = 3
    level = 2
    ball.dx = speed / 2
    ball.dy = -speed / 2
    document.getElementById("load-screen").classList.add("remove-load-screen")

}

function level3() {
    game_start.play();
    brickRowCount = 6;
    brickColumnCount = 6;
    brickcount = 0

    Brickimg.src = "creeper.jpg"
    generateBricksLev3()
    score = 0
    speed = 4
    level = 3
    ball.dx = speed / 2
    ball.dy = -speed / 2
    document.getElementById("load-screen").classList.add("remove-load-screen")

}

function generateBricksLev1() {
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
            brickcount++;
        }
    }
}

function generateBricksLev2() {
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            if ((c + r) % 2 == 0) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
                brickcount++;
            } else bricks[c][r] = { status: 0 };
        }
    }
}

function generateBricksLev3() {
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            if ((c + r) < 6) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
                brickcount++;
            } else bricks[c][r] = { status: 0 };
        }
    }
}

// Ball Object
let ball = {
    x: 250,
    y: 400,
    radius: 8,

    dx: 0,
    dy: -0,
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        var gradient = ctx.createLinearGradient(0, 0, 0, this.radius);
        gradient.addColorStop(0, "#FFA500");
        gradient.addColorStop(1, "#FF8C00");

        // Fill the path
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.stroke();
    }
};
//Paddle Object
let paddle = {
    x: 250,
    y: 475,

    width: 150,
    height: 20,

    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#230c3";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
}

// Paddle left and right functionality
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function paddleMove() {
    if (rightPressed) {
        paddle.x += 5;
        if (paddle.x + paddle.width > canvas.width) {
            paddle.x = canvas.width - paddle.width;
        }
    } else if (leftPressed) {
        paddle.x -= 5;
        if (paddle.x < 0) {
            paddle.x = 0;
        }
    }
}

// Wall bouncing functionality
function checkWallCollision() {
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1;
    }

    if (ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }
    if (ball.y + ball.radius > canvas.height) {
        paddle_drop.play();
        endGame("lost");
    }
}


// Paddle bouncing functionality
function checkPaddleCollision() {
    let half = (paddle.width) / 2
    if ((ball.x) > paddle.x && (ball.x) < paddle.x + paddle.width) {

        if (Math.abs(ball.y + ball.radius - paddle.y) < 2) {
            bounce_paddle.play();

            factor = ((ball.x - paddle.x) - half) / paddle.width / 0.5 * .75

            console.log(ball.dx, ball.dy)

            ball.dx = factor * speed
            ball.dy = (1 - Math.abs(factor)) * speed * -1
            console.log(factor, ball.dx, ball.dy)
        }
    }
}


// Brick formation functionality

var brickWidth = 45;
var brickHeight = 35;
var brickPadding = 4;
var brickOffsetTop = 30;
var brickOffsetLeft = 5;

var bricks = [];
score = 0


function brickCollisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status === 1) {
                if (
                    ball.x + ball.radius >= b.x &&
                    ball.x - ball.radius <= b.x + brickWidth &&
                    ball.y + ball.radius >= b.y &&
                    ball.y - ball.radius <= b.y + brickHeight

                ) // Is ball hitting the brick at all 
                {

                    console.log(ball.x, ball.radius, b.x, ball.x - ball.radius - b.x + brickWidth, ball.x + ball.radius - b.x, b.y, ball.radius)
                        //break_brick.play();
                    if (Math.abs(ball.x - ball.radius - b.x - brickWidth) < 5 || Math.abs(ball.x - b.x) < 5 && ((ball.y + ball.radius) < b.y && ball.y - ball.radius > b.y + b.height)) // Ball at left or right edge of brick
                    {
                        ball.dx *= -1
                            //break_brick.play();
                    } else // Ball at up or down edge of brick
                    {
                        ball.dy *= -1
                            //break_brick.play();
                    }
                    // Brick is destroyed and score updated
                    break_brick.play();
                    b.status = 0;
                    //break_brick.play();
                    score++;
                    brickcount--;
                    if (brickcount === 0) endGame("won")
                }
                document.querySelector("#current-score").innerText = "Score: " + score
            }
        }
    }
}

function endGame(condition) {
    game_start.pause();
    ball.dx = 0
    ball.dy = 0
    ball.x = 250
    ball.y = 400
    if (condition === "won") {
        document.querySelector("#score-screen").classList.remove("remove-load-screen")
        document.querySelector("#score").innerText = score
    } else {
        document.querySelector("#score-screen").classList.remove("remove-load-screen")
        document.querySelector("#score-screen > h2").innerText = "You lost, Your score is: "
        document.querySelector("#score").innerText = score
    }

}

function mainMenu() {
    document.querySelector("#score-screen").classList.add("remove-load-screen")
    document.querySelector("#load-screen").classList.remove("remove-load-screen")
    console.log(document.querySelector(("#high-score" + level)))
    if (parseInt(document.querySelector(("#high-score" + level)).innerText) < score) {
        document.querySelector(("#high-score" + level)).innerText = score
    }
}



function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.drawImage(Brickimg, brickX, brickY)
                    //ctx.fillStyle = "#230c33";
                    //ctx.fill();
                ctx.closePath();

            }
        }
    }
}

drawBricks()

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
    paddle.draw();

    checkWallCollision()
    checkPaddleCollision()
    brickCollisionDetection()
    paddleMove()
    drawBricks()


    ball.x += ball.dx;
    ball.y += ball.dy;
    window.requestAnimationFrame(game);
}
game();
window.requestAnimationFrame(game);
