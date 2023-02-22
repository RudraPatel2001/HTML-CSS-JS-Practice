$.get('https://catfact.ninja/fact', (okjson) => {
    var myFact = okjson['fact'];
    $('.container').text(myFact);
})

function dispFact() {
    $.get('https://catfact.ninja/fact', (okjson) => {
    var myFact = okjson['fact'];
    $('.container').text(myFact);
})
}