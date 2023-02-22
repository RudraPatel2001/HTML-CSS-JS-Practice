function hello(){
    var a = prompt("String : ");
    var revStr = "", i;
    for (let i = a.length - 1; i >= 0; i--) {
        revStr += a[i];
    }
    console.log(revStr);
};
hello();