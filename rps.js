let userChoice = '';
let compChoice = '';
let userScore = 0, compScore = 0;
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s = document.getElementById('status');
let btns = document.getElementsByTagName('button');
const roundWinner = (a, b) => {
    if (a === 'Rock') {
        btns[0].style.backgroundColor = 'lightcoral';
        if (b === 'Rock') {
            btns[3].style.backgroundColor = 'lightcoral';
        } else if (b === 'Paper') {
            userScore += 1;
            btns[4].style.backgroundColor = 'lightcoral';
            s2.innerHTML = 'Score : ' + userScore;
        } else {
            compScore += 1;
            btns[5].style.backgroundColor = 'lightcoral';
            s1.innerHTML = 'Score : ' + compScore;
        }
    } else if (a === 'Paper') {
        btns[1].style.backgroundColor = 'lightcoral';
        if (b === 'Paper') {
            btns[4].style.backgroundColor = 'lightcoral';
        } else if (b === 'Scissor') {
            userScore += 1;
            btns[5].style.backgroundColor = 'lightcoral';
            s2.innerHTML = 'Score : ' + userScore;
        }
        else {
            compScore += 1;
            btns[3].style.backgroundColor = 'lightcoral';
            s1.innerHTML = 'Score : ' + compScore;
        }
    } else {
        btns[2].style.backgroundColor = 'lightcoral';
        if (b === 'Scissor') {
            btns[5].style.backgroundColor = 'lightcoral';
        } else if (b === 'Rock') {
            userScore += 1;
            btns[3].style.backgroundColor = 'lightcoral';
            s2.innerHTML = 'Score : '+userScore;
        }
        else {
            compScore += 1;
            btns[4].style.backgroundColor = 'lightcoral';
            s1.innerHTML = 'Score : '+compScore;
        }
    }
    if (userScore === 5 || compScore === 5) {
        if (userScore === 5)
            alert("CONGRATULATIONS! You've Won the GAME!");
        if (compScore === 5)
            alert("OOPS! Computer has Won the GAME!");
        for (let i = 0; i < 6; i++) {
            btns[i].style.backgroundColor = '#00ffea';
        }
        s1.innerHTML = 'Score : 0';
        s2.innerHTML = 'Score : 0';
        userScore = 0;
        compScore = 0;
    }
}

const setCompValue = () => {
    let randNum = Math.ceil(Math.random() * 3);
    if (randNum == 1)
        compChoice = 'Rock';
    else if (randNum == 2)
        compChoice = 'Paper';
    else
        compChoice = 'Scissor';
}

const getUserValue = (e) => {
    setCompValue();
    userChoice = e.target.innerText;
    for (let i = 0; i < 6; i++) {
        btns[i].style.backgroundColor = '#00ffea';
    }
    roundWinner(compChoice, userChoice);
}