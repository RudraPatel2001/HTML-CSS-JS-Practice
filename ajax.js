function loadDoc() {
  function hello(){
    document.getElementById('ajax').innerHTML = this.responseText;
  }
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener("load", hello);
    xhttp.open("GET", "ajaxfile.txt");
    xhttp.send();
  }