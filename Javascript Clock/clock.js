function myClock(){
var today = new Date();
var hours = today.getHours();
var minute = today.getMinutes()
var second = today.getSeconds()
var amp = "am";
hours = 14;
if (hours > 18){
    document.body.style.backgroundImage = "url('img/night.gif')";
    document.getElementById("clock").style.color="yellow"
}else if (hours <12 && hours>6){
    document.body.style.backgroundImage = "url('img/morning.gif')";
    document.getElementById("clock").style.color="red"
}

if(hours>12){
    var hours =hours-12;
    amp = "pm"
}

time = hours + ":"+ minute + ":"+second;
document.getElementById("clock").innerHTML=time+ " "+amp;
setTimeout(myClock, 1000)
}

