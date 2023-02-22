let input = document.getElementById('input');
let btn = document.getElementById('btn');
let notes = document.querySelector('#notes');

function addNewNote() {
    let div = document.createElement('div');
    let innerDiv = document.createElement('div');
    let button = document.createElement('button');
    div.className = 'jod';
    div.id = 'myjod';
    innerDiv.textContent = input.value;
    button.className = 'delbtn';
    button.textContent = 'Delete';
    div.appendChild(innerDiv);
    div.appendChild(button);
    notes.appendChild(div);
}

btn.addEventListener('click', () => {
    if (input.value == '')
        return;
    else
        addNewNote();
    input.value = '';
})