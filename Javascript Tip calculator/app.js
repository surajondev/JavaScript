'use strict'

const a=()=>{

    let b= parseInt (document.getElementById('p1').value);
    let c= parseInt (document.getElementById('t1').value);


    let k=((c/100)*b)

    document.getElementById('txt1').innerHTML=k;
    document.getElementById('txt2').innerHTML=k+b;
    
}

const res=()=>{

    document.getElementById('p1').value=null
    document.getElementById('t1').value=null
    document.getElementById('txt1').textContent=null
    document.getElementById('txt2').textContent=null
}

document.getElementById('bt1').addEventListener('click',a);
document.getElementById('bt2').addEventListener('click',res);