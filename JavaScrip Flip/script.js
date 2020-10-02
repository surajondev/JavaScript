function flip(){
    var s = ["HEAD", "TAIL"];
    let random =s[Math.floor(Math.random()*s.length)];
    var res = document.querySelector("#result");
    res.innerHTML=random;
    // break;
}

  