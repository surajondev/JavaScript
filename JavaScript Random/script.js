function random(){
    var a = f1.t1.value;
    var b = f1.t2.value;
    var c = f1.t3.value;
    var d = f1.t4.value;
    var input = [a , b, c, d];
    var random = input[Math.floor(Math.random()*input.length)];
    document.getElementById("result").innerHTML = random;
}