let startBtn = document.getElementById("startbtn");
let newCardBtn = document.getElementById("newcardbtn");
let disclaim = document.getElementById("disclaim");
let cardsArr = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageElem = document.getElementById("message");
let sumElem = document.getElementById("sum");
let cardsElem = document.getElementById("cards");

startBtn.style.display = 'none';
newCardBtn.style.display = 'none';

disclaim.addEventListener('click', () => {
    disclaim.style.visibility = 'hidden';
    newCardBtn.style.display = 'block';
    startBtn.style.display = 'block';
});

function getNewCard() {
    let randomCard = Math.floor(Math.random() * 10) + 1;
    return randomCard;
}

function startGame() {
    hasBlackJack = false;
    isAlive = true;
    let firstCard = getNewCard();
    let secondCard = getNewCard();
    cardsArr = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {

    startBtn.disabled = true;
    startBtn.style.opacity = 0.5;
    newCardBtn.disabled = false;
    newCardBtn.style.opacity = 1;

    cardsElem.innerText = "Cards : ";

    for (let i = 0; i < cardsArr.length; i++) {
        cardsElem.textContent += cardsArr[i] + " ";
    }

    sumElem.textContent = "Sum : " + sum;

    if (sum <= 20) {
        message = "<i>Please draw a new card?</i> 😅";
    } else if (sum === 21) {
        message = "<i>You have the BlackJack!</i> 🥳";
        hasBlackJack = true;
        newCardBtn.style.opacity = 0.5;
        newCardBtn.disabled = true;
        startBtn.style.opacity = 1;
        startBtn.disabled = false;
    } else {
        message = "<i>You're out of the game.</i> 🙁";
        isAlive = false;
        newCardBtn.style.opacity = 0.5;
        newCardBtn.disabled = true;
        startBtn.style.opacity = 1;
        startBtn.disabled = false;
    }
    messageElem.innerHTML = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let nC = getNewCard();
        cardsArr.push(nC);
        sum += nC;
        renderGame();
    }
}