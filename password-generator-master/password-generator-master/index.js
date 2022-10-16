const characters = ["@", "#", "!", "$", "%", "&"];
const capLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const smallLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const form = document.querySelector("form");
const limit = document.querySelector("#length");
const numberRadio = document.querySelector("#numbers");
const slettersRadio = document.querySelector("#sletters");
const clettersRadio = document.querySelector("#cletters");
const symbolsRadio = document.querySelector("#symbols");
const show = document.querySelector(".show");
let choices = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  choices = [];
  if (numberRadio.checked === true) {
    choices.push(numbers);
  }
  if (slettersRadio.checked === true) {
    choices.push(smallLetters);
  }
  if (clettersRadio.checked === true) {
    choices.push(capLetters);
  }
  if (symbolsRadio.checked === true) {
    choices.push(characters);
  }
  const password = passwordGenerator(limit.value);
  show.innerText = password;
});

const passwordGenerator = (limit) => {
  let password = "";
  let choiceLen = choices.length;
  for (let i = 0; i < limit; i++) {
    const randomArray = choices[randomNumber(choiceLen)];
    let len = randomArray.length;
    password += randomArray[randomNumber(len)];
  }
  return password;
};

const copy = document.querySelector(".copy");
const clickCopy = document.querySelector(".clickCopy");

clickCopy.addEventListener("click", (e) => {
  const password = show.innerText;
  navigator.clipboard.writeText(password);
  copy.attributes[0].value = "assets/clipboard-check.svg";
  setTimeout(() => {
    copy.attributes[0].value = "assets/clipboard.svg";
  }, 5000);
});

