function oddeven()
{
    var number = Number(document.querySelector('.number').value);
	
	if(number % 2 == 0) {
		// Even
		document.querySelector('.result').innerHTML = "Even";
	} else {
		// Odd
		document.querySelector('.result').innerHTML = "Odd";
	}
}







