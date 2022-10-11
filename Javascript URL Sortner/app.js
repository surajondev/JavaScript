//selectors
const generate = document.querySelector(".button");
const form = document.getElementById("form");
const selectItem = document.getElementById("memetype");
const continer = document.querySelector(".url_section");
const copy = document.querySelector(".copy");

//contain copied url
let copy_url = "";

//create the sort url components
const createElement = (url) => {
  //creata div and add a class
  let div = document.createElement("div");
  div.classList.add("url_div");

  //create elements
  const elements = `
    <p class='url_container'>${url}</p>
    <button onclick='handleCopy()'>Copy</button>
    `;
  div.insertAdjacentHTML("afterbegin", elements);
  continer.appendChild(div); //insert the on the main section
};

//Submit data
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //check if the value are avalible or not
  if (!selectItem.value) {
    alert("Please Write Your URL");
  } else {
    try {
      //call api
      const callApi = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${selectItem.value}`
      );
      const getData = await callApi.json();
      const data =
        getData?.result.full_short_link2 ?? getData?.result.full_short_link;

      createElement(data); //call the create element function
      copy_url = data; // add data on the copy_url variable

      selectItem.value = ""; // clear the input filed
    } catch (error) {
      alert("Something want wrong");
      selectItem.value = ""; // clear the input filed
    }
  }
});

// copy url function
const handleCopy = () => {
  navigator.clipboard.writeText(copy_url); //copy text
  alert("Copied URL Successfully");
};
