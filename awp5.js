let input = document.getElementById('input');
let btn1 = document.getElementById('btn1');
let left = document.getElementById('left');
let right = document.getElementById('right');
let btn2 = document.getElementById('btn2');
let m2 = document.getElementById('m2');

btn1.addEventListener('click', () => {
    let x = parseInt(input.value), flag = true;
    for(let i = 2; i < x; i++) {
        if(x % i == 0) {
            flag = false;
            break;
        }
    }
    if(flag)
        alert('Prime Number');
    else
        alert('Not a Prime Number');
})

btn2.addEventListener('click', () => {
    let valArr = [];
    let x = parseInt(left.value);
    let y = parseInt(right.value);
    for(let i = x; i <= y; i++) {
        let flag = true;
        for(let j = 2; j < i; j++) {
            if(i % j == 0) {
                flag = false;
                break;
            }
        }
        if(flag)
            valArr.push(i);
        else
            continue;    
    }
    m2.innerHTML = `<h2>Prime Numbers from ${x} to ${y} are : ${valArr}</h2>`;
})