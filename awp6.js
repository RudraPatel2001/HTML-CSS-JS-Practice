let row = document.getElementById('row');
let col = document.getElementById('col');
let tab = document.getElementById('tab');
let tr = document.getElementsByTagName('tr');
let td = document.getElementsByTagName('td');

row.addEventListener('click', () => {
    let myRow = '<tr><td>Hello</td><td>World</td>';
    for (let i = 2; i < td.length / tr.length; i++) {
        if (i % 2 == 0)
            myRow += `<td>Hello ${i}</td>`;
        else
            myRow += `<td>World ${i}</td>`;
    }
    myRow += '</tr>';
    tab.innerHTML += myRow;
})

col.addEventListener('click', () => {
    for (let i = 0; i < tr.length; i++) {
        if (i % 2 == 0)
            tr[i].innerHTML += `<td>Hello ${i}</td>`;
        else
            tr[i].innerHTML += `<td>World ${i}</td>`;
    }
})