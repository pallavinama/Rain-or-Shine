        // OpenWeather API - Current Weather ------------------- API documentation @ https://openweathermap.org/current
        // OpenWeather API - Inputs
        var appidInput = "54a9099a651206645d31affb6bbd4e54"; // API key
        var qInput = ""; // city name | Ex: ["Atlanta", "Telluride", "New York City", "Nashville"]
        var zipInput = $("#zipCode").val(); // zip code | Ex: [30188, 94040, 72201, 80239]
        var unitsInput = "imperial"; // temperature units | Ex: [default:Kelvin, imperial:Fahreneit, metric:Celsius]

        // OpenWeather API - Conditions
        var appid = "&appid=" + appidInput;
        var weather = "weather";
        var forecast = "forecast";
        var q = "?q=" + qInput;
        var zip = "?zip=" + zipInput;
        var units = "&units=" + unitsInput;
        var iconFilePath = "http://openweathermap.org/img/w/";
        var iconFileType = ".png";

        // OpenWeather API - Queries: Do Not Modify
        var queryUrl = "https://api.openweathermap.org/data/2.5/";
        var queryUrl_weather = queryUrl.concat(weather);
        var queryUrl_forecast = queryUrl.concat(forecast);

        // OpenWeather API - Queries: Available for Use
        var queryUrl_currentWeatherAtCity = queryUrl_weather.concat(q).concat(units).concat(appid); // Get current weather by city name
        var queryUrl_currentWeatherAtZIP = queryUrl_weather.concat(zip).concat(units).concat(appid); // Get current weather by zip code
        var queryUrl_forecastWeatherAtCity = queryUrl_forecast.concat(q).concat(units).concat(appid); // Get forecasted weather by city
        var queryUrl_forecastWeatherAtZIP = queryUrl_forecast.concat(zip).concat(units).concat(appid); // Get forecasted weather by zip

        // OpenWeather API - Calls

        // Call: current weather card
        function ajaxCallGetZipCode() {
            console.log("ajax called");
            $.ajax({
                url: queryUrl_currentWeatherAtZIP,
                method: "GET"
            }).then(function(response) {

                $("#city-name").text("City: " + response.name);
                $("#date").text("Today: " + moment().format("l"));
                $("#weather-icon").append($("<img>").attr("src", iconFilePath + response.weather[0].icon + iconFileType).attr("alt", "icon"));
                $("#temperature").text("Temperature: " + response.main.temp + " °F");
                $("#description").text("Description: " + response.weather[0].description);

                // console.log("Weather at zip: ", response);
                // console.log("     City name: ", response.name);
                // console.log("  Today's date: ", moment().format("l"));
                // console.log("  Weather icon: ", iconFilePath + response.weather[0].icon + iconFileType);
                // console.log("   Temperature: ", response.main.temp);
                // console.log("   Description: ", response.weather[0].description);

                // $("#city-name").text("City: " + response.name);
                // $("#date").text("Today: " + moment().format("l"));
                // $("#weather-icon").append($("<img>").attr("src", iconFilePath + response.weather[0].icon + iconFileType).attr("alt", "icon"));
                // $("#temperature").text("Temperature: " + response.main.temp + " °F");
                // $("#description").text("Description: " + response.weather[0].description);
            });
        }
