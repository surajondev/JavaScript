const btn = document.getElementById('button')
const body = document.querySelector('body')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const hex_value1 = document.getElementById('hex1');
const hex_value2 = document.getElementById('hex2');

body.style.backgroundColor = '#000';

hex_value1.innerHTML = '#000';

btn.addEventListener('click', function () {
    let hex_key = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length);
        hex_key = hex_key + hex[index];
    }
    hex_value1.innerHTML = hex_key;

    hex_key = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length);
        hex_key = hex_key + hex[index];
    }
    hex_value2.innerHTML = hex_key;

    body.style.background = `linear-gradient(${hex_value1.innerHTML}, ${hex_value2.innerHTML})`;



    body.style.transition = '1s';
});
