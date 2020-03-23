        // OpenWeather API - Calls

        // Call: current weather card
        function ajaxCallOpenWeatherAtZipCode(input) {
            let zipInput = input;
            let zip = "?zip=" + zipInput;
            let unitsInput = "imperial";
            let units = "&units=" + unitsInput;
            let iconFilePath = "https://openweathermap.org/img/w/";
            let iconFileType = ".png";
            let appidInput = "54a9099a651206645d31affb6bbd4e54";
            let appid = "&appid=" + appidInput;
            let weather = "weather";
            let queryUrl = "https://api.openweathermap.org/data/2.5/";
            let queryUrl_weather = queryUrl.concat(weather);
            let queryUrl_currentWeatherAtZIP = queryUrl_weather.concat(zip).concat(units).concat(appid);

            $.ajax({
                url: queryUrl_currentWeatherAtZIP,
                method: "GET"
            }).then(function(response) {
                // console.log("Weather at zip: ", response);
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

                    let i = 0; // If weather does match a bad wether, do this
                    while (i < badWeathers.length) {
                        if (input === badWeathers[i]) {
                            console.log("bad weather matched");
                            // generate indoor activity

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
                    } // If weather does not match a bad wether, do this
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
