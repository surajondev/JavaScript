let expense_per_category = [0,0,0,0,0];
var count = 4;

update_sum();
function update_sum(){
    var sum = document.querySelectorAll(".sum");
    for( var i=0;i<=count;i++){
        sum[i].innerHTML = " - "+expense_per_category[i]+" Rs. spent";
    }
}

function add_expense(){
    var amount = document.getElementsByClassName("form-input")[0].value;
    var date = document.getElementsByClassName("form-input")[2].value;
    var note = document.getElementsByClassName("form-input")[3].value;
    var category = document.getElementsByClassName("form-input")[1].selectedIndex;
    var selected = document.getElementsByTagName("option")[category].value;
    
    if(amount && date&& note && selected){
        alert("Successfully added expense!");
        var table = document.getElementsByTagName("table")[0];
        var new_row = document.createElement("tr");
        new_row.innerHTML = `
        <tr style="border-bottom: 1px solid white;">
            <td>${amount}</td>
            <td>${selected}</td>
            <td>${date}</td>
            <td>${note}</td>
        </tr>
        `;
        table.appendChild(new_row);
        expense_per_category[category]= parseInt(expense_per_category[category]) +parseInt(amount);
        update_sum();
        console.log(count);
        document.getElementsByClassName("add-new-expense")[0].style.display="none";
    }
    else{
        alert("Please enter all details");
    }
}
function add_category(){
    var new_category_value = document.getElementsByName("new-category")[0].value;
    if(new_category_value){
        var dropdown = document.getElementsByName("category")[0];
        var available_categories = document.getElementsByClassName("available-categories")[0];

        var new_category_option = document.createElement("option");
        new_category_option.innerHTML = `<option value=${new_category_value}>${new_category_value}</option>`;
        count++;
        expense_per_category[count] = 0; 
        var new_category_span = document.createElement("span");
        new_category_span.innerHTML = `<span>${new_category_value}<span class='sum'> - ${expense_per_category[count]}Rs. spent</span></span>`;
        dropdown.appendChild(new_category_option);
        available_categories.appendChild(new_category_span);
        document.getElementsByClassName("add-category")[0].style.display="none";
    }
}
function add_category_page(){
    if(document.getElementsByClassName("add-category")[0].style.display=="block"){
        document.getElementsByClassName("add-category")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("add-category")[0].style.display="block";
    }
}
function add_expense_page(){
    if(document.getElementsByClassName("add-new-expense")[0].style.display=="block"){
        document.getElementsByClassName("add-new-expense")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("add-new-expense")[0].style.display="block";
    }
    
}