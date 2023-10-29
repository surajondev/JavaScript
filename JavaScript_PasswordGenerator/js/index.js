const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let length = characters.length;

let randomchar = ''

let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")


function generateRandom(){

    let len = document.getElementById("length").value
    console.log(len)
    let pass = ""
    if(len == " "){
        len=10;
    }
    for(let i=0;i<=len;i++){
        randomchar = characters[Math.floor( Math.random()*length ) + 1]
        pass += randomchar;
    }
    return pass
}

function generatePassword(){

    pass1.value = generateRandom()
    
    pass2.value = generateRandom()
}





/*


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
*/







