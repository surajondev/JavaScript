document.querySelector("#calculator").addEventListener("click",updater);


function updater(){
    let weight = document.querySelector("#fnum1").value;
    let height = document.querySelector("#fnum2").value;
    if(weight == "" || height == ""){
        alert("Please fill all the fields");
        }else {
            let bmi = (parseInt(weight)) / (parseInt(height * height) / 10000);
            document.querySelector(".result").innerHTML= "Your BMI is: "+ bmi.toFixed(2);
            //document.getElementById('submit').disabled = false;
            };
}