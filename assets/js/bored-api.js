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
        $.ajax({
            url: queryUrl_randomActivity,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
        });
        