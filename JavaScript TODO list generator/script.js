var myNodelist = document.getElementsByTagName("TR");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Remove");
    span.className = "closeitem btn btn-default pull-right";
    span.appendChild(txt);

    var td2 = document.createElement("td");
    td2.appendChild(span);
    myNodelist[i].appendChild(td2);
    // myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("closeitem");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
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

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            var tr = this.parentElement.parentElement;
            document.getElementById("myUL").removeChild(tr);
        }
    }
}