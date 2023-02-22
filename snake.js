let canvas = document.getElementById('canvas')

for (let i = 0; i < 30; i++) {
    let row_div = document.createElement('div')
    row_div.className = 'gridbox'
    row_div.style.display = 'flex'
    row_div.style.justifyContent = 'space-between'
    for (let j = 0; j < 60; j++) {
        let col_div = document.createElement('div')
        col_div.className = 'gridbox gridcol'
        col_div.style.height = '15px'
        col_div.style.width = '15px'
        col_div.style.borderRadius = '3px'
        // col_div.style.backgroundColor = '#123456'
        row_div.appendChild(col_div)
    }
    canvas.appendChild(row_div)
}

const boxes = document.getElementsByClassName('gridcol')
let index = 0
let box_no_20 = boxes[index]
let randNum = Math.floor(Math.random() * 1800)
boxes[randNum].style.backgroundColor = '#cc1240'

let snakeLength = 1

const returnIndex = () => {
    let currKey = ''
    document.onkeydown = e => {
        if (e.key == "ArrowLeft" && e.key != currKey) {
            currKey = e.key
            setInterval(() => {
                return index--
            }, 250);
        }
        else if (e.key == "ArrowUp" && e.key != currKey) {
            currKey = e.key
            setInterval(() => {
                return index -= 59
            }, 250);
        }
        else if (e.key == "ArrowRight" && e.key != currKey) {
            currKey = e.key
            setInterval(() => {
                return index++
            }, 250);
        }
        else if (e.key == "ArrowDown" && e.key != currKey) {
            currKey = e.key
            setInterval(() => {
                return index += 59
            }, 250);
        }
    }
}

setInterval(() => {

    if (index == randNum) {
        snakeLength++
        randNum = Math.floor(Math.random() * 1800)
        boxes[randNum].style.backgroundColor = '#cc1240'
    }

    box_no_20.style.backgroundColor = 'transparent'

    returnIndex()

    box_no_20 = boxes[index]
    box_no_20.style.backgroundColor = 'yellow'

    if (index == 1799 || index < 0)
        index = 0
}, 250);