var inputcolor = document.getElementById("favcolor");
var root = document.documentElement;

inputcolor.addEventListener("input",(e) => {
    document.getElementById("c-code").innerHTML = e.target.value;
    root.style.setProperty("--backcol",e.target.value);
});