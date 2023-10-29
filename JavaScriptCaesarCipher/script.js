function Encrypt() {
    let plainText = document.getElementById("plain-text").value;
    let key = parseInt(document.getElementById("key").value);
    let cipheredText = "";
    for( var position = 0; position <  plainText.length; position++) {
        var letter = plainText[position];
        if(letter.match(/[a-z]/i)){

            var code = parseInt(plainText.charCodeAt(position));

            if (code >= 65 && code <= 90) {
                letter = String.fromCharCode(((code - 65 + key) % 26) + 65);
            }
        
            else if (code >= 97 && code <= 122) {
                letter = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        cipheredText += letter;
    }
    document.getElementById("encrypted-text").innerHTML = cipheredText;
}