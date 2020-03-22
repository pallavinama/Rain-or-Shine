        // Bored API --------------------------------------- API documentation @ https://www.boredapi.com/documentation
        // Bored API - Inputs
        var keyInput = ""; // A unique numeric id | Ex: [1000000, 3943506, 9364041, 9999999]
        var typeInput = ""; // Type of the activity | Ex: ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
        var participantsInput = ""; // The number of people that this activity could involve | Ex: [0, n]
        var priceInput = ""; // A factor describing the cost of the event with zero being free | Ex: [0, 1]
        var minpriceInput = ""; // Minimum specified price in an inclusively constrained range | Ex: [0 >= minprice <= maxprice]
        var maxpriceInput = ""; // Maximum specified price in an inclusively constrained range | Ex: [minprice >= maxprice <= 1]
        var accessibilityInput = ""; // A factor describing how possible an event is to do with zero being the most accessible | Ex: [0.0, 1.0]
        var minaccessibilityInput = ""; // Minimum specified accessibility in an inclusively constrained range | Ex: [0 >= minaccessibility <= maxaccessibility]
        var maxaccessibilityInput = ""; // Maximum specified accessibility in an inclusively constrained range | Ex: [minaccessibility >= maxaccessibility <= 1]

        // Bored API - Conditions
        var activity = "activity";
        var randomActivity = "/";
        var key = "?key=" + keyInput;
        var type = "?type=" + typeInput;
        var participants = "?participants=" + participantsInput;
        var price = "?price=" + priceInput;
        var minprice = "?minprice=" + minpriceInput;
        var maxprice = "?maxprice=" + maxpriceInput;
        var accessibility = "?accessibility=" + accessibilityInput;
        var minaccessibility = "?minaccessibility=" + minaccessibilityInput;
        var maxaccessibility = "?maxaccessibility=" + maxaccessibilityInput;

        // Bored API - Queries: Do Not Modify
        var queryUrl = "http://www.boredapi.com/api/";
        var queryUrl_activity = queryUrl.concat(activity);

        // Bored API - Queries: Available for Use
        var queryUrl_randomActivity = queryUrl_activity.concat(randomActivity); // Get a random event
        var queryUrl_key = queryUrl_activity.concat(key); // Find an activity by its key
        var queryUrl_type = queryUrl_activity.concat(type); // Find a random activity with a given type
        var queryUrl_participants = queryUrl_activity.concat(participants); // Find a random activity with a given number of participants
        var queryUrl_price = queryUrl_activity.concat(price); // Find an activity with a specified price
        var queryUrl_minPrice = queryUrl_activity.concat(minprice); // Find an event with a specified minimum price range
        var queryUrl_maxPrice = queryUrl_activity.concat(maxprice); // Find an event with a specified maximum price range
        var queryUrl_constrainPrice = queryUrl_activity.concat(minprice).concat("&").concat(maxprice); // Find an event with a specified constrained price
        var queryUrl_accessibility = queryUrl_activity.concat(accessibility); // Find an activity with a specified accessibility
        var queryUrl_minAccessibility = queryUrl_activity.concat(minaccessibility); // Find an event with a specified minimum accessibility range
        var queryUrl_minAccessibility = queryUrl_activity.concat(maxaccessibility); // Find an event with a specified maximum accessibility range
        var queryUrl_constrainAccessibility = queryUrl_activity.concat(minaccessibility).concat("&").concat(maxaccessibility); // Find an event with a specified constrained accessibility

        // Bored API - Calls

        // $.ajax({
        //     url: queryUrl_randomActivity,
        //     method: "GET"
        // }).then(function(response) {
        //     console.log(response);
        // });

        // ================================================================================================================================

        // OpenWeather API - Current Weather ------------------- API documentation @ https://openweathermap.org/current
        // OpenWeather API - Forecasted Weather -------------- API documentation @ https://openweathermap.org/forecast5
        // OpenWeather API - Inputs
        var appidInput = "54a9099a651206645d31affb6bbd4e54"; // API key
        var qInput = ""; // city name | Ex: ["Atlanta", "Telluride", "New York City", "Nashville"]
        var zipInput = ""; // zip code | Ex: [30188, 94040, 72201, 80239]
        var unitsInput = ""; // temperature units | Ex: [default:Kelvin, imperial:Fahreneit, metric:Celsius]

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

        // Note: Items above are unimplemented code. Used only to create a 'libary' of modular ajax calls. Implemented and called below.

        // OpenWeather API - Calls

        // Call: current weather card
        function ajaxCallOpenWeatherAtZipCode(input) {
            let zipInput = input;
            let zip = "?zip=" + zipInput;
            let unitsInput = "imperial";
            let units = "&units=" + unitsInput;
            let appidInput = "54a9099a651206645d31affb6bbd4e54";
            let appid = "&appid=" + appidInput;
            let queryUrl_currentWeatherAtZIP = queryUrl_weather.concat(zip).concat(units).concat(appid);

            $.ajax({
                url: queryUrl_currentWeatherAtZIP,
                method: "GET"
            }).then(function(response) {
                console.log("Weather at zip: ", response);
                // console.log("     City name: ", response.name);
                // console.log("  Today's date: ", moment().format("l"));
                // console.log("          Main: ", response.weather[0].main);
                // console.log("  Weather icon: ", iconFilePath + response.weather[0].icon + iconFileType);
                // console.log("   Temperature: ", response.main.temp);
                // console.log("   Description: ", response.weather[0].description);
                
                $("#city-name").text("City: " + response.name);
                $("#date").text("Today: " + moment().format("l"));
                $("#main").text("Sky: " + response.weather[0].main);
                $("#weather-icon").html($("<img>").attr("src", iconFilePath + response.weather[0].icon + iconFileType).attr("alt", "icon"));
                $("#temperature").text("Temperature: " + response.main.temp + " °F");
                $("#description").text(response.weather[0].description);

                let weatherId = response.weather[0].id // store weather condition to adjust Bored API activity
                console.log("Weather id: ", weatherId);
                // let testId = 211;
                ajaxCallBoredActivityFromWeather(weatherId);

                function ajaxCallBoredActivityFromWeather(input){
                    // badWeathers = id's for poor weather conditions from OpenWeather's API @ https://openweathermap.org/weather-conditions
                    let badWeathers = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321,
                                       500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 600, 601, 611, 612, 615, 616, 620, 621, 622,
                                       701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
                    let indoorActivities = ["3950821", "4565537", "3943506", "5881028", "2167064", "3561421", "8081693", "3136036",
                                            "8731971", "9414706", "2095681", "8264223", "8926492", "3469378", "4704256", "9364041",
                                            "8321894", "4614092", "7806284", "2352669", "9366464", "5554727", "3352474", "6778219",
                                            "3456114", "6596257", "5881647", "6693574", "4688012", "8570429", "6808057", "8344539",
                                            "7091374", "8750692", "4387026", "6301585", "1162360", "8503795", "8364626", "6613428",
                                            "1408058", "6081071", "5262759", "5585829", "8557562", "6925988", "4981819", "9266212",
                                            "8092359", "5554174", "1878070", "1382389", "3920096", "6509779", "2055368", "9026787",
                                            "6826029", "3141592", "4809815", "6553978", "3818400", "8125168", "1947449", "5665663",
                                            "1799120", "8832605", "4124860", "9212950", "7114122", "5092652", "2581372", "1668223",
                                            "1668223", "7265395", "6197243", "8253550", "3192099", "2715253", "2742452", "4708863",
                                            "4296813", "9216391", "5675880", "3136729", "4179309", "2735499", "9999999", "4379552",
                                            "1592381", "1645485", "1516976 "];
                    let queryUrl = "https://www.boredapi.com/api/";
                    let activity = "activity";
                    let queryUrl_activity = queryUrl.concat(activity);
                    let randomIndoorActivityKey = function randomActivity(array) {
                        return array[Math.floor(Math.random() * indoorActivities.length)];
                    }
                    let indoorActivityKey1 = "?key=" + randomIndoorActivityKey(indoorActivities);
                    let indoorActivityKey2 = "?key=" + randomIndoorActivityKey(indoorActivities);
                    let indoorActivityKey3 = "?key=" + randomIndoorActivityKey(indoorActivities);
                    let indoorActivityKey4 = "?key=" + randomIndoorActivityKey(indoorActivities);
                    let queryUrl_indoorActivity1 = queryUrl_activity.concat(indoorActivityKey1);
                    let queryUrl_indoorActivity2 = queryUrl_activity.concat(indoorActivityKey2);
                    let queryUrl_indoorActivity3 = queryUrl_activity.concat(indoorActivityKey3);
                    let queryUrl_indoorActivity4 = queryUrl_activity.concat(indoorActivityKey4);

                    let i = 0;
                    while (i < badWeathers.length) {
                        if (input === badWeathers[i]) {
                            console.log("bad weather matched");
                            // generate indoor activity

                            // if rain or other inclement weather, limit typeInput to 
                            // education - no prevention
                            // recreational - prevent {key: 6813070, 8503795, 8724324, 1934228, 6852505, 3149232}
                            // social - prevent {key: 1505028, 4558850, 2085321, 2211716, 1432113}
                            // diy - prevent {key: 8631548}
                            // charity - prevent {key: 4894697}
                            // cooking - no prevention
                            // relaxation - prevent {key: 5940465, 8979931, 4290333, 9318514, 8832605, 7526324}
                            // music - no prevention
                            // busywork - prevent {key: 1592381}

                            // generate  Activity 1
                            $.ajax({
                                url: queryUrl_indoorActivity1,
                                method: "GET"
                            }).then(function(response) {
                                $("#activity1-title").text(response.activity);
                            });

                            // generate  Activity 2
                            $.ajax({
                                url: queryUrl_indoorActivity2,
                                method: "GET"
                            }).then(function(response) {
                                $("#activity2-title").text(response.activity);
                            });

                            // generate  Activity 3
                            $.ajax({
                                url: queryUrl_indoorActivity3,
                                method: "GET"
                            }).then(function(response) {
                                $("#activity3-title").text(response.activity);
                            });

                            // generate  Activity 4
                            $.ajax({
                                url: queryUrl_indoorActivity4,
                                method: "GET"
                            }).then(function(response) {
                                $("#activity4-title").text(response.activity);
                            });
                            break;
                        }
                        i++;
                    }
                    if (input !== badWeathers[i]) {
                        console.log("no bad weather matched");
                        // generate  Activity 1
                        $.ajax({
                            url: queryUrl_randomActivity,
                            method: "GET"
                        }).then(function(response) {
                            // console.log(response);
                            $("#activity1-title").text(response.activity);
                        });

                        // generate  Activity 2
                        $.ajax({
                            url: queryUrl_randomActivity,
                            method: "GET"
                        }).then(function(response) {
                            // console.log(response);
                            $("#activity2-title").text(response.activity);
                        });

                        // generate  Activity 3
                        $.ajax({
                            url: queryUrl_randomActivity,
                            method: "GET"
                        }).then(function(response) {
                            // console.log(response);
                            $("#activity3-title").text(response.activity);
                        });

                        // generate  Activity 4
                        $.ajax({
                            url: queryUrl_randomActivity,
                            method: "GET"
                        }).then(function(response) {
                            // console.log(response);
                            $("#activity4-title").text(response.activity);
                        });
                    }
                }
            });
        }
