let result = document.getElementById("result");
let container = document.getElementById("container");
let tArr = document.getElementsByClassName("t");
let count = 1;

function clearTable() {
    for (let i = 0; i < tArr.length; i++) {
        tArr[i].innerHTML = '';
    }
    container.style.display = 'none';
    result.style.display = 'block';
    setTimeout(() => {
        result.style.display = 'none';
        container.style.display = 'block';
    }, 4000);
    count = 1;
}

function checkTrio() {
    let tElem1 = tArr[0].innerHTML;
    let tElem2 = tArr[1].innerHTML;
    let tElem3 = tArr[2].innerHTML;
    let tElem4 = tArr[3].innerHTML;
    let tElem5 = tArr[4].innerHTML;
    let tElem6 = tArr[5].innerHTML;
    let tElem7 = tArr[6].innerHTML;
    let tElem8 = tArr[7].innerHTML;
    let tElem9 = tArr[8].innerHTML;
    if ((tElem1 == tElem2) && (tElem2 == tElem3) && (tElem3 != '')) {
        if (tElem1 == 'X')
            result.innerHTML = 'Player X wins!';
        else
            result.innerHTML = 'Player O wins!';
        clearTable();
    } else if ((tElem1 == tElem4) && (tElem4 == tElem7) && (tElem7 != '')) {
        if (tElem1 == 'X')
            result.innerHTML = 'Player X wins!';
        else
            result.innerHTML = 'Player O wins!';
        clearTable();
    } else if ((tElem1 == tElem5) && (tElem5 == tElem9) && (tElem9 != '')) {
        if (tElem1 == 'X')
            result.innerHTML = 'Player X wins!';
        else
            result.innerHTML = 'Player O wins!';
        clearTable();
    } else if ((tElem2 == tElem5) && (tElem5 == tElem8) && (tElem8 != '')) {
        if (tElem2 == 'X')
            result.innerHTML = 'Player X wins!'
        else
            result.innerHTML = 'Player O wins!'
        clearTable();
    } else if ((tElem3 == tElem6) && (tElem6 == tElem9) && (tElem9 != '')) {
        if (tElem3 == 'X')
            result.innerHTML = 'Player X wins!'
        else
            result.innerHTML = 'Player O wins!'
        clearTable();
    } else if ((tElem4 == tElem5) && (tElem5 == tElem6) && (tElem6 != '')) {
        if (tElem4 == 'X')
            result.innerHTML = 'Player X wins!'
        else
            result.innerHTML = 'Player O wins!'
        clearTable();
    } else if ((tElem7 == tElem8) && (tElem8 == tElem9) && (tElem9 != '')) {
        if (tElem7 == 'X')
            result.innerHTML = 'Player X wins!'
        else
            result.innerHTML = 'Player O wins!'
        clearTable();
    } else if ((tElem3 == tElem5) && (tElem5 == tElem7) && (tElem7 != '')) {
        if (tElem3 == 'X')
            result.innerHTML = 'Player X wins!'
        else
            result.innerHTML = 'Player O wins!'
        clearTable();
    }
}

const checkDraw = () => {
    flag = true;
    for (let i = 0; i < tArr.length; i++) {
        if (tArr[i].innerHTML === '') {
            flag = false;
            break;
        }
    }
    return flag;
}

for (let i = 0; i < tArr.length; i++) {
    tArr[i].addEventListener('click', () => {
        if (count % 2 != 0) {
            tArr[i].innerHTML = 'X';
            count++;
        } else {
            tArr[i].innerHTML = 'O';
            count++;
        }
        if (count > 5)
            checkTrio();
    })
}

document.querySelector("button").addEventListener('click', clearTable);