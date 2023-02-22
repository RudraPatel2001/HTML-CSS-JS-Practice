let a = document.getElementsByTagName('option');
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', () => {
        document.getElementById('removeColor').innerText = a[i].value + ' Removed';
        a[i].innerText = 'Badhaai Ho';
        a[i].style.display = 'none';
    })
}