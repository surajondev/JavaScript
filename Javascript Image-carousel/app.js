//select arrows
let left = document.querySelector(".leftArrow");
let right = document.querySelector(".rightArrow");
//select images
let imageContiner = document.querySelector(".imageContiner");
let image = document.querySelectorAll(".imageContiner img");

//counter variable value 0..
let counter = 0;
let size = image[0].clientWidth;

//image slide function
const image_slide = () => {
  return (imageContiner.style.transform = `translateX( ${-size * counter}px)`);
};

//click events
const clickEvent = (counte) => {
  //counter variable take 1 click and value change for 1..
  counte == "inc" ? counter++ : counter--;

  //If image length are finish then send to number 1 image
  if (counter == image.length) {
    counter = image.length - counter;
    image_slide();
  }
  //If image length are -1 then send to number Last image image
  if (counter == -1) {
    counter = image.length - 1;
    image_slide();
  }

  image_slide();
};

//click event for right arrow
right.addEventListener("click", () => clickEvent("inc"));
//click event for left arrow
left.addEventListener("click", () => clickEvent("dec"));
