let newStr = "";
document.getElementById('output').innerText = 'New String : ';
document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('output').innerText = 'New String : ';
    let a = document.getElementById('str').value;
    console.log(a);
    let i;
    newStr += a[0].toUpperCase();
    console.log(a[0].toUpperCase());
    for (i = 1; i < a.length; i++) {
        if (a[i - 1] == ' ')
            newStr += a[i].toUpperCase();
        else
            newStr += a[i];            
    }
    document.getElementById('output').innerText = `New String : ${newStr}`;
    newStr = "";
})