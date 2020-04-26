$(document).ready(function () {
    console.log("Jquery y la web cargados");
    $("#city").keypress(function (e) {
        if (e.which == 13) {
            searchCity();
        }
    });
    // var theCity = $("#city").val();
    // alert()
    // var key = "439d4b804bc8187953eb36d2a8c26a02";
    //https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02
    // $.getJSON("https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=" + theCity + ",uk&appid=" + key ,function(response){
    //     console.log(response);
    //     console.log(response.weather[0].main);
    //     $("#datos").append("<p>Clouds: " + response.base +"</p>");

    // $("#datos").append("<p>" +"Clouds: " + response.base + "</p>");

    //     });
});

function searchCity() {
    var theCity = $("#city").val();
    var key = "a38656fcf967a388c6027b0920d8e2e8";
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&appid=" + key, function (response) {
        console.log(response);
        console.log(response.weather[0].main);
        var newFlag = "https://www.countryflags.io/" + response.sys.country + "/flat/64.png";
        // console.log(response.sys.country);
        // $("#datos").append("<img src='https://www.countryflags.io/' + 'GB' + '/flat/64.png'>");
        $("#datos").append("<h3>Your selected city is " + response.name +"</h3>");
        $("#datos").append('<img src="https://www.countryflags.io/' + response.sys.country + '/flat/64.png">');

        $("#datos").append("<p>The temperature right now is " + Math.round(response.main.temp-273.15) +"°C" +"</p>");


        document.getElementById("city").value = "";
    });
}

function clearLog(){
    document.getElementById("datos").innerHTML = "";
}