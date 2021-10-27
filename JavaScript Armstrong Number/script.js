function armstrong()
{
    var x =Number(document.querySelector('.input').value);
    var remainder, inputNumber, sum=0;
    inputNumber=x
    while(inputNumber!=0)
    {
        remainder=inputNumber%10;
        sum=sum+ remainder*remainder*remainder
        inputNumber=parseInt(inputNumber/10);
    }
    const result = x
    if(sum==x){
        document.querySelector('.result').innerHTML =x + " is an armstrong number!";
    }else {
        document.querySelector('.result').innerHTML =x + " is not an armstrong number!";
    }
    result.preventDefault()

}







