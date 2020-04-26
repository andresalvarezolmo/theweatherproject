$(document).ready(function () 
{
    console.log("Jquery working");
    $("#city").keypress(function (e) 
    {
        //enter as submit button
        if (e.which == 13) 
        {
            searchCity();
        }
    });
});

function searchCity() 
{
    var theCity = $("#city").val();
    var key = "a38656fcf967a388c6027b0920d8e2e8";

    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&appid=" + key,
        beforeSend:function()
        {
            console.log("Loading...");
        },
        error: function()
        {
            console.log("Error happened, enter valid input");
            $("#wrongInput").css('display','block');    
        },
        success: function (response) 
        {
            $("#wrongInput").css('display','none');
            console.log(response);

            $("#datos").prepend("<p>The temperature is " + Math.round(response.main.temp-273.15) +"°C" +"</p>");
            $("#datos").prepend("<p>The humidity is " + Math.round(response.main.humidity) +"%" +"</p>");
            $("#datos").prepend("<p>The wind is " + Math.round(response.wind.speed) +" km/h" +"</p>");
            $("#datos").prepend('<img src="https://www.countryflags.io/' + response.sys.country + '/flat/64.png">');
            $("#datos").prepend("<h3>You have selected " + response.name +"</h3>");
            document.getElementById("city").value = "";
        }
    });
}

function clearLog()
{
    document.getElementById("datos").innerHTML = "";
}