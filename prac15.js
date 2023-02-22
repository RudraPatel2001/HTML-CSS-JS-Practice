let odd = '';
let even = '';

document.getElementById('btn').addEventListener('click', () => {
    odd = '';
    even = '';
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let N1 = parseInt(n1);
    let N2 = parseInt(n2);
    for(let i=N1;i<=N2;i++)
    {
        if(i%2==0)
            even = even + `${i},`;
        else
            odd = odd + `${i},`;
    }
    let newOdd = odd.slice(0, odd.length-1), newEven = even.slice(0, even.length-1);
    document.getElementById('odd').innerText = `Odd Numbers : ${newOdd}`;
    document.getElementById('even').innerText = `Even Numbers : ${newEven}`;
})