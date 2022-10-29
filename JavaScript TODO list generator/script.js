var myNodelist = document.getElementsByTagName("TR");
var table = document.getElementById('myUL');
table.classList.add('table');
console.log(table.classList)

var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Remove");
    span.className = "closeitem btn btn-default pull-right";
    span.appendChild(txt);

    var td2 = document.createElement("td");
    td2.appendChild(span);
    myNodelist[i].appendChild(td2);
}

var close = document.getElementsByClassName("closeitem");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('tr');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'TR') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("tr");
    var td1 = document.createElement("td");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    td1.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var td2 = document.createElement("td");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Remove");
    span.className = "closeitem btn btn-default pull-right";
    span.appendChild(txt);
    td2.appendChild(span);

    li.appendChild(td1);
    li.appendChild(td2);
    table.appendChild(li);
    

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }
  
}
