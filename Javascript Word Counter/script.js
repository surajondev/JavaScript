let textbox=document.getElementById('textbox');
textbox.addEventListener('input',function(){
    var t=this.value;
    console.log(t);
    t=t.trim();
    let words=t.split(" ");
    let clean=words.filter(function(e){
        return e!="";
    })
    console.log(clean);
    document.getElementById("word").innerHTML=clean.length;
})