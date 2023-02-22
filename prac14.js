let counter = 0;
document.getElementById('sc').innerText = `Square : ${counter * counter} Cube : ${counter*counter*counter}`;
document.getElementById('disp').innerText = `${counter}`;
document.getElementById('btn').addEventListener('click', () => {
    counter += 1;
    if (counter % 5 == 0) {
        document.getElementById('disp').style.backgroundColor = 'lawngreen';
        document.getElementById('disp').style.color = 'red';
        document.getElementById('disp').innerText = `${counter}`;
        document.getElementById('sc').innerText = `Square : ${counter * counter} Cube : ${counter*counter*counter}`;
    }
    else {
        document.getElementById('disp').style.backgroundColor = 'aqua';
        document.getElementById('disp').style.color = 'black';
        document.getElementById('disp').innerText = `${counter}`;
        document.getElementById('sc').innerText = `Square : ${counter * counter} Cube : ${counter*counter*counter}`;

    }
})