 const inputBox = document.querySelector("#input-box");
 const listContainer = document.querySelector("#list-container");

const button = document.querySelector("button");
button.addEventListener("click", addTask);


function addTask(){
    if(inputBox.value === ''){
        alert("You must write a task");
    }
    else{
        let li = document.createElement("li");      //creates an <li> and stores it in a variable li
        li.innerHTML = inputBox.value;      // sets the inner HTML to the value inside the inputBox
        listContainer.appendChild(li);      //appends the li variable to the listContainer
        let span = document.createElement("span")
        span.innerHTML = ("\u00d7");
        li.appendChild(span);       //To add a cross at the end of the task item (u00d7 is the id used to describe the cross)     
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); 
    // Whatever innerHTML is in the listContainer will be stored into  a variable "data" in the browser
}

// Function to display the saved data as soon as the page is reloaded
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

