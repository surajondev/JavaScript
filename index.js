var guess = Math.floor(Math.random() * 101)
var chances = 0;

var k = prompt(`guess the number from 0-100, chances are ${chances}`)

while (k != guess) {
  chances++;
  if (k < guess) {
    console.log("k is less than guess")
    var k = prompt(`guess the number from 0-100, chances are ${chances}`)
  }
  else {
    console.log("k is greater than guess")
    var k = prompt(`guess the number from 0-100, chances are ${chances}`)
  }
}
if (k == guess) {


  marks = 100 - chances
  console.log("congratulations on taking correct guess, your score is " + marks)
}
