$(document).ready(function () {

    // Global DOM Variables
    var $welcomeHeader = $('#welcome');

    function getCityGiveWeather(){

        // Variables
        var city = null;
        var longitude = null;
        var latitude = null;

        // API Key
        var apiKey = '030bc0f1981cdc23e788b7524fb7c97a';

        // IP Address API Call
        $.getJSON('https://freegeoip.net/json/?callback=?', function(data) {

            // Log the response
            console.log(JSON.stringify(data, null, 2));

            city = data.city;
            longitude = data.longitude;
            latitude = data.latitude;
            console.log(longitude, latitude);

        });


        setTimeout(function(){

            if(city === "") {

                // opening messsage
                $welcomeHeader.text('According to our data, your current weather is');

                // Weather API address
                var weatherApiAddress = 'http://api.openweathermap.org/data/2.5/weather?q=' + 'lat=' + latitude + '&lon=' + longitude + '&APPID=' + apiKey;

                $.getJSON(weatherApiAddress,function(data){

                    console.log(JSON.stringify(data));

                    console.log(data.main.temp);

                    // Post the Celsius Temp
                    var kelvin = data.main.temp;

                    // Code for conversion
                    function celsiusInput(argument) {

                        var celsius = (argument) - 273.15;

                        $('#celsius').text(celsius);

                        return celsius;
                    }

                    // Build
                    function fahrenheitInput(argument) {

                        var fahrenheit = (argument * (9/5)) + 32;

                        $('#fahrenheit').text(fahrenheit);

                        $('.degree').fadeIn(500);
                    }

                    // Execute
                    fahrenheitInput(celsiusInput(kelvin));

                });



            } else {
                // Say What Up
                $welcomeHeader.text(city + ' in the house yall');

                // Weather API address
                var weatherApiAddress = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apiKey;

                $.getJSON(weatherApiAddress,function(data){

                    console.log(JSON.stringify(data));

                    console.log(data.main.temp);

                    // Post the Celsius Temp
                    var kelvin = data.main.temp;

                    // Code for conversion
                    function celsiusInput(argument) {

                        var celsius = (argument) - 273.15;

                        $('#celsius').text(celsius);

                        return celsius;
                    }

                    // Build
                    function fahrenheitInput(argument) {

                        var fahrenheit = (argument * (9/5)) + 32;

                        $('#fahrenheit').text(fahrenheit);

                        $('.degree').fadeIn(500);
                    }

                    // Execute
                    fahrenheitInput(celsiusInput(kelvin));

                });
            }



        }, 2000);



    }

    // Call the actual function
    getCityGiveWeather();

    // hover function to click here
    $('#clickButton').hover( function(){
        $(this).css("background-color", "rgba(255,255,255,.7)" );
    })


});
