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
    var counter = 0;
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
            
            $("#datos").prepend(
                    '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" id ="panels">' 
                    +"<h4>In " + response.name +"</h4>"  
                    +'<img src="https://www.countryflags.io/' + response.sys.country + '/flat/64.png">'
                    + "<p>The temperature is " + Math.round(response.main.temp-273.15) +"°C" +"</p>"
                    +"<p>The humidity is " + Math.round(response.main.humidity) +"%" +"</p>"
                    + "<p>The wind is " + Math.round(response.wind.speed) +" km/h" +"</p>"
                    + "<button class='btn btn-danger' onclick = datos.removeChild(this.parentNode)>Delete</button>"
                    + "<br><br>"
                    // + "<button class='btn btn-danger' onclick = console.log(this.parentNode)>Delete</button>"
                +'</div>'
            );
            document.getElementById("city").value = "";

            //Understanding parent and child node

            // var container =  document.createElement("div");
            // var content = document.createElement("p")
            // content.innerHTML = 'City name';
            // container.appendChild(content);
            // document.getElementById("datos").appendChild(container);
            // var mybutton = document.createElement("button");
            // mybutton.innerHTML = "Delete city";
            // mybutton.onclick = () => datos.removeChild(mybutton.parentNode);
            // container.appendChild(mybutton);
        }
    });
}

function clearLog()
{
    document.getElementById("datos").innerHTML = "";
    // this.parentNode.delete();
}
function deleteCity(){
    console.log(Node.parentNode);
}