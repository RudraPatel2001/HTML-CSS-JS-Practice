let wordleWord = '';
let userWord = '';
let btnGroup = document.getElementsByClassName('Enter');
let Text = document.getElementById('text');
let Answer = document.getElementById('ans');

Answer.style.display = 'none';

function movePointer(e, prev, curr, next) {
    let currLen = document.getElementById(curr).value.length;
    let maxLen = document.getElementById(curr).getAttribute("maxlength");
    if (currLen == maxLen) {
        if (next !== '')
            document.getElementById(next).focus();
    }
    if (e.key === "Backspace") {
        if (prev !== '')
            document.getElementById(prev).focus();
    }
}

function setWordle() {
    let word = document.getElementById('word').value;
    wordleWord = word;
    console.log("Wordle Word : '" + wordleWord + "'");
}

function resetWordle() {
    let totalInputs = document.getElementsByTagName('input');
    for (let i = 0; i < totalInputs.length; i++) {
        totalInputs[i].value = '';
        totalInputs[i].disabled = false;
        totalInputs[i].style.color = 'white';
        totalInputs[i].style.backgroundColor = '#272729';
    }
    wordleWord = '';
    Text.innerText = '';
}

function render() {
    Answer.style.display = 'flex';
}

Answer.addEventListener('click', () => {
    Answer.style.display = 'none';
    resetWordle();
})

for (let k = 0; k < 6; k++) {
    btnGroup[k].addEventListener('click', () => {
        let Input = document.getElementsByClassName('inp' + (k + 1));
        for (let i = 0; i < 5; i++) {
            let Char = Input[i].value;
            userWord += Char;
            if (wordleWord.includes(Char) && Char == wordleWord[i]) {
                Input[i].innerHTML = Char;
                Input[i].style.backgroundColor = '#28b745';
            }
            else if (wordleWord.includes(Char) && Char != wordleWord[i] && Char != '') {
                Input[i].innerHTML = Char;
                Input[i].style.backgroundColor = '#dfc100';
            }
            else
                Input[i].innerHTML = Char;
            Input[i].disabled = true;
        }
        if (wordleWord === userWord) {
            setTimeout(() => {
                render();
                Text.innerHTML = `Correct 👍 [${k+1}/6]`;
            }, 500);
        }
        if (k == 5 && wordleWord !== userWord) {
            render();
            Text.innerHTML = 'Better luck next time! 😔<br>Word : ' + wordleWord;
        }
        userWord = '';
    })
}