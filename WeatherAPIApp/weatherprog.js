let inp = document.getElementById('city');
let btn = document.getElementById('search');
let p0 = document.getElementById('p0');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');


const print = async() => {
    let url = 'https://open-weather13.p.rapidapi.com/city/';
    url+=String(inp.value);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ce7e48e6bmshd8e6a74de3feeccp1d287fjsn5d4e9707cdb6',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
        p0.innerText = String(result.weather[0].main);
        p1.innerText = "Temp : " + String(result.main.temp) + "'";
        p2.innerText = "Min Temp : " + String(result.main.temp_min) + "'";
        p3.innerText = "Max Temp : " + String(result.main.temp_max) + "'";
} catch (error) {
	console.error(error);
}
  
}


btn.onclick = () => print();
