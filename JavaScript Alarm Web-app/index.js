
const currentT = document.querySelector("h1");
const content = document.querySelector(".content");
const selectOpt = document.querySelectorAll("select");
const alarmBtn = document.querySelector("button");


let alarmTime;
let isAlarmSet = false;
let ringtone = new Audio("./files/ringtone.mp3");


for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;

    let option = `<option value="${i}">${i}</option>`;
    selectOpt[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;

    let option = `<option value="${i}">${i}</option>`;
    selectOpt[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";

    let option = `<option value="${ampm}">${ampm}</option>`;
    selectOpt[2].firstElementChild.insertAdjacentHTML("afterend", option);
}


setInterval(() => {

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //  console.log(`${h} : ${m} : ${s}  ${ampm}`);
    currentT.innerHTML = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime == `${h}:${m} ${ampm}`) {
        console.log("it's ur time...");
        ringtone.play();
        ringtone.loop = true;
    }

}, 1000);


function setAlarm() {

    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        alarmBtn.innerText = "Set time to code..";
        return isAlarmSet = false;
    }

    let time = `${selectOpt[0].value}:${selectOpt[1].value} ${selectOpt[2].value}`;
    console.log(time);

    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Bro, select a time to code...!");
    }

    alarmTime = time;
    isAlarmSet = true;

    content.classList.add("disable");
    alarmBtn.innerText = "Cancel before it's too late"
}


alarmBtn.addEventListener("click", setAlarm);
