let timer = setInterval(increaseCounter, 1000)
const counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const likeButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')

minusButton.addEventListener('click', decrementCounter)
plusButton.addEventListener('click', incrementCounter)
likeButton.addEventListener('click', likeANumber)
pauseButton.addEventListener('click', pauseCounter)

function decrementCounter() {
    let result = parseInt(counter.innerText)
    result-- 
    counter.textContent = result 
}

function incrementCounter() {
    let result = parseInt(counter.innerText)
    result++ 
    counter.textContent = result  
}

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

// -------------------------LIKE A NUMBER----------------------------------------------

const likesUL = document.getElementsByClassName('likes')[0]

function likeANumber(event) {
  
   if (!likesUL.childNodes[0])  {

        let newLike = document.createElement('li')
        newLike.innerHTML = `${counter.innerText} has been liked 1 time`
        likesUL.appendChild(newLike)

    }

    else {
        const newArray = []
        
        let children = likesUL.childNodes
        
        for (let i = 0; i < children.length; i++) {
         
            if (children[i].innerText.replace(/ .*/,'') === counter.innerText) {
                
                newArray.push(children[i])
                
            }
      
        }
        
        if (!newArray[0]) {
            let newLike = document.createElement('li')
            newLike.innerHTML = `${counter.innerText} has been liked 1 time`
            likesUL.appendChild(newLike)

        }
        else {
         
            let parsed= parseInt(newArray[0].innerText.split(" ")[4])
            parsed++
            newArray[0].innerText = `${counter.innerText} has been liked ${parsed} times`
            
        }
        console.log(newArray)
    }
   
}


// --------------------------ADD A COMMENT----------------------------------------------

const commentForm = document.getElementById('comment-form')
const divForComments = document.getElementById('list')

commentForm.addEventListener('submit', postComment ) 

function postComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('comment-input')
    const newComment = document.createElement('p')

    newComment.innerHTML = commentInput.value 

    divForComments.appendChild(newComment)
    event.target.reset();
}








