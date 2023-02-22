let hello = document.getElementById('hello');
document.getElementById('btn1').addEventListener('click',function(){
    hello.style.background = 'rgb(50,250,100)';
})
document.getElementById('btn2').addEventListener('click',function(){
    hello.style.background = 'white';
})

document.getElementById('daba').addEventListener('click',function(){
    let a = new Date();
    document.getElementById('date').innerText = a;
})

document.getElementById('matdaba').addEventListener('click',function(){
    document.getElementById('date').innerText = '';
})