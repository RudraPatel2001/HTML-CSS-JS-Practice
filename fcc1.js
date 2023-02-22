function newQuote() {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", (data) => {
        $('#text').text(data.quote);
        $('#author').text('- ' + data.author);
    });
}

$(document).load(newQuote());