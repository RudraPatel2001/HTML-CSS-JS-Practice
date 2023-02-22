document.getElementById('add').addEventListener('click', () => {
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let sum = a+b;
    document.getElementById('op').innerHTML = 'Addition is : '+sum;
})
document.getElementById('sub').addEventListener('click', () => {
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let sub = a-b;
    document.getElementById('op').innerHTML = 'Subtraction is : '+sub;
})
document.getElementById('mul').addEventListener('click', () => {
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let mul = a * b;
    document.getElementById('op').innerHTML = 'Multiplication is : '+mul;
})
document.getElementById('div').addEventListener('click', () => {
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let div = a / b;
    document.getElementById('op').innerHTML = 'Division is : '+div.toFixed(2);
})