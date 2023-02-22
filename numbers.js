$.get('http://numbersapi.com/random/math', (data) => {

    $('#fact').text(data);

});

function newFact(){

    $.get('http://numbersapi.com/random/math', (data) => {
    
    $('#fact').text(data);
    console.log(data);
});

}
