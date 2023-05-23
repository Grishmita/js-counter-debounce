

const clickButton = document.getElementById('click-btn')

const counterDisplay = document.getElementById('counter')

let counter = 0

let debounceTimer

function debounce(func, delay){
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(func, delay)
}

function incrementCounter() {
    counter++
    counterDisplay.textContent = counter
}

clickButton.addEventListener('click', () =>{
    debounce(incrementCounter, 500)
})