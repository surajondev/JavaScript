let url = "https://type.fit/api/quotes";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let a = 0;
  
    let searchbtn = document.getElementById("searchbtn");
    searchbtn.addEventListener("click", function () {
      let countnum = document.getElementById("countnum");
      let inputsearch = document.getElementById("inputsearch");
      a = inputsearch.value;
      countnum.value = inputsearch.value;
      displaythought(a, data);
    });
  
    let nextthought = document.getElementById("nextthought");
    nextthought.addEventListener("click", function () {
      let countnum = document.getElementById("countnum");
  
      countnum.value = ++a;
  
      displaythought(countnum.value, data);
    });
  
    let previousthought = document.getElementById("previousthought");
    previousthought.addEventListener("click", function () {
      let countnum = document.getElementById("countnum");
  
      if (countnum.value < 0) {
        let thought = document.getElementById("thought");
        thought.innerHTML = `<b><i>You are at first quote</i></b>`;
      } else {
        a = --countnum.value;
  
        displaythought(a, data);
      }
    });
  
    displaythought(0, data);
  });
  
function displaythought(index, data) {
  let thought = document.getElementById("thought");
  
  if (data[index].author == null) {
    data[index].author = "unknown";
  }
  
  let htmlthought = `<div class="alert alert-outline-primary">
            ${data[index].text}<br>
            <span style="color:#00ffc5;">
                ${data[index].author}
            </span>
        </div>`;
  thought.innerHTML = htmlthought;
}