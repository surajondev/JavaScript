//selectors
const generate = document.querySelector(".button");
const download = document.querySelector(".download");
const image = document.querySelector(".image");

//default image
const default_image =
  "https://preview.redd.it/4rht7i60mqr91.jpg?width=320&crop=smart&auto=webp&s=ee6bf81fb7aea091ddc5faa0ba3eb99f1b630821";

//call api
const getApiData = async () => {
  const callApi = await fetch(`https://meme-api.herokuapp.com/gimme`);
  const getData = await callApi.json();

  console.log('Hello');
  
  //assign the value image tag and link tag
  // ?? default_image -> when preview[2] are empty then show the default image
  image.src = getData?.preview[2] ?? default_image;
  download.href = getData?.preview[2] ?? default_image;
};
getApiData();

//click and genarate memes
generate.addEventListener("click", () => {
  getApiData();
});
