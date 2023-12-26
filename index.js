const min = 1
const max = 100
let randomNumber = Math.floor(Math.random()*(max-min + 1)) + min

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuesses = 1

let playGame = true

if(playGame) {
    submit.addEventListener("click", function(e){
        e.preventDefault();
       const guess =  parseInt(userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a valid number")
    } else if(guess < 1){
        alert("Please Enter a number more then 1 ")
    }
    else if(guess > 100){
        alert("Please Enter a  number less then 100 ")
    } else{
        prevGuess.push(guess)
        if(numGuesses === 11){
            dissplayGuess(guess)
            displayMessage(`Game Over, </br> Random number was ${randomNumber}`)
            endGame()
        }else{
            dissplayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function dissplayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML +=`${guess}   `
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame"> Start new Game</h2>`
    p.style.cursor = 'pointer'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
   const newGameButton=  document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    randomNumber = Math.floor(Math.random()*(max-min + 1)) + min
    prevGuess = []
    numGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuesses}`
    userInput.removeAttribute('disabled','')
    startOver.removeChild(p)
    playGame = true

   })
}



