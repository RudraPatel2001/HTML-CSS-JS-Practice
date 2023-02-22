function validateEmail() {
    let EmailID = document.getElementById('eid').value;
    let mailFormat = /^[a-zA-Z0-9.\_]+\@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    if (mailFormat.test(EmailID)) {
        document.getElementById('eid').style.color = 'green';
        return true;
    } {
        document.getElementById('eid').style.color = 'red';
        return false;
    }
}
document.getElementById('btn').addEventListener('click', () => {
    if (document.getElementById('name').value == '') {
        document.getElementById('na').innerHTML = 'Please fill out Name';
        document.getElementById('na').style.color = 'red';
    }
    if (document.getElementById('add').value == '') {
        document.getElementById('ad').innerHTML = 'Please fill out Address';
        document.getElementById('ad').style.color = 'red';
    }
    if (document.getElementById('gen').value == '') {
        document.getElementById('ge').innerHTML = 'Please fill out Gender';
        document.getElementById('ge').style.color = 'red';
    }
    if (document.getElementById('occ').value == '') {
        document.getElementById('oc').innerHTML = 'Please fill out Occupation';
        document.getElementById('oc').style.color = 'red';
    }
    if (document.getElementById('eid').value == '') {
        document.getElementById('ei').innerHTML = 'Please fill out Email ID';
        document.getElementById('ei').style.color = 'red';
    }
})

document.getElementById('btn').addEventListener('click', () => {
    var a = {};
})