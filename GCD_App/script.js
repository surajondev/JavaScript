function ComputeGCD() {

    let a = parseFloat(document.getElementById("number-a").value);
    let b = parseFloat(document.getElementById("number-b").value);

    function gcd(a, b) {
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            return "Invalid input. Float numbers are not allowed";
        }
        else if(a < 0 || b < 0) {
            return "Invalid input. Enter positive number";
        }
        else {
            if(b === 0){
                return a;
            }
            return gcd(b, a % b);
        }
    }
    let result = gcd(a, b).toString();
    document.getElementById("result").innerHTML = result;
}
