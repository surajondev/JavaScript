//selectors
const create = document.querySelector(".button");
const form = document.getElementById("form");
const input = document.getElementById("qrcode");
const image = document.getElementById("image");
const link = document.getElementById("link");

//Submit data
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //check if the value are avalible or not
  if (!input.value) {
    alert("Please Write Your URL");
  } else {
    try {
      //call api
      const callApi = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=450x450`
      );
      image.src = callApi.url; //add url on the image src attribute
      link.href = callApi.url; //add url on the link href attribute

      input.value = ""; // clear the input filed
    } catch (error) {
      alert("Something went wrong");
      input.value = ""; // clear the input filed
    }
  }
});
