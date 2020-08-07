let timer = setInterval(increaseCounter, 1000)
const counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const likeButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', pauseCounter)

function increaseCounter() {
    let result = parseInt(counter.innerText)
    result++ 
    counter.textContent = result 
}

function pauseCounter() {
    if (pauseButton.innerText === 'pause') {
        clearInterval(timer)
        toggleButton()
        pauseButton.innerText = 'resume'
    }
    else {
        timer = setInterval(increaseCounter, 1000)
        toggleButton()
        pauseButton.innerText = 'pause'
    }
}



function toggleButton() {
    minusButton.disabled = !minusButton.disabled
    plusButton.disabled = !plusButton.disabled
    likeButton.disabled = !likeButton.disabled
}








