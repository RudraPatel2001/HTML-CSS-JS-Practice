let a = document.getElementsByClassName('c');
console.log(a.length, a[2].innerHTML, a[1].innerHTML, a[0].innerHTML);
let b = document.querySelectorAll('.c');
for(let i = 0 ; i < b.length ; i++){
    console.log(b[i].innerHTML);
}