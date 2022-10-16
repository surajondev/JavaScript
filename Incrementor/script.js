const output = document.getElementById('output')
const increase = document.getElementById('increment')
const decrease = document.getElementById('decrement')
const reset = document.getElementById('reset')

let count = 0;
updateOnStartup()
function updateOnStartup() {
    output.innerHTML = Number(localStorage.getItem('number'))
}

increase.addEventListener('click', () => {
    count++;
    storeValue(count)
    changeOutput(count)
})

reset.addEventListener('click', () => {
    count = 0
    changeOutput(count)
    storeValue(count)
})

decrease.addEventListener('click', () => {
    count--;
    changeOutput(count)
    storeValue(count)
})

function changeOutput(count) {
    output.innerHTML = count
    return
}

function storeValue(val) {
    localStorage.setItem('number', val.toString())
    let num = localStorage.getItem('number')
    console.log(num)
}