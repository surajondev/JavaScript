let guess = Math.floor(Math.random() * 101)
let chances = 0;

let k = prompt(`guess the number from 0-100, chances are ${chances}`)

while (k != guess) {
  chances++;
  if (k < guess) {
    console.log("k is less than guess")
    let k = prompt(`guess the number from 0-100, chances are ${chances}`)
  }
  else {
    console.log("k is greater than guess")
    let k = prompt(`guess the number from 0-100, chances are ${chances}`)
  }
}
if (k == guess) {


  marks = 100 - chances
  console.log("congratulations on taking correct guess, your score is " + marks)
}
