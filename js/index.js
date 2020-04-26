$(document).ready(function () {
    console.log("Jquery working");
    $("#city").keypress(function (e) {
        //enter as submit button
        if (e.which == 13) {
            searchCity();
        }
    });
});

function searchCity() {
    var theCity = $("#city").val();
    var key = "a38656fcf967a388c6027b0920d8e2e8";
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&appid=" + key, function (response) {
        console.log(response);
        console.log(response.weather[0].main);
        var newFlag = "https://www.countryflags.io/" + response.sys.country + "/flat/64.png";
        $("#datos").append("<h3>You have selected " + response.name +"</h3>");
        $("#datos").append('<img src="https://www.countryflags.io/' + response.sys.country + '/flat/64.png">');

        $("#datos").append("<p>The temperature is " + Math.round(response.main.temp-273.15) +"°C" +"</p>");
        $("#datos").append("<p>The humidity is " + Math.round(response.main.humidity) +"%" +"</p>");

        $("#datos").append("<p>The wind is " + Math.round(response.wind.speed) +" km/h" +"</p>");


        document.getElementById("city").value = "";
    });
}

function clearLog(){
    document.getElementById("datos").innerHTML = "";
}