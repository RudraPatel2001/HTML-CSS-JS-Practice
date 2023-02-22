// Weather API

$.getJSON("https://api.weatherbit.io/v2.0/current?city=Vadodara&key=5d2e559182ee498080c119e7f1798b55", (okjson) => {
    const iconURL = 'https://www.weatherbit.io/static/img/icons/c02d.png';
    var aTag = '<a href="https://en.wikipedia.org/wiki/Vadodara" target="_blank()">Vadodara</a>';
    $('.icon').attr('src', iconURL);
    $('.cityname').text(okjson.data[0].city_name);
    $('.temp').text(okjson.data[0].temp + '°C');
    $('.weather').text(okjson.data[0].weather.description);
    $('.wiki').append('Read more about ' + aTag);
});

function jsonAPI() {

    const city = document.getElementById('city').value;

    const myURL = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=5d2e559182ee498080c119e7f1798b55";

    console.log(myURL);

    var newCity = '';

    $.getJSON(myURL, (okjson) => {
        
        cityAPI = okjson.data[0].city_name;

        for (let i = 0; i < cityAPI.length; i++) {
            if (cityAPI[i] == ' ')
                newCity += '_';
            else
                newCity += cityAPI[i];
        }

        var newTag = '<a href="https://en.wikipedia.org/wiki/' + newCity + '"' + ' target="_blank()">' + okjson.data[0].city_name + '</a>';

        console.log(newTag);

        const iconCode = okjson.data[0].weather.icon;
        const iconURL = 'https://www.weatherbit.io/static/img/icons/' + iconCode + '.png';
        $('.icon').attr('src', iconURL);
        $('.cityname').text(cityAPI);
        $('.temp').text(okjson.data[0].temp + '°C');
        $('.weather').text(okjson.data[0].weather.description);
        $('.wiki').empty();
        $('.wiki').append('Read more about ' + newTag);
    });

    document.getElementById('city').value = "";

}
