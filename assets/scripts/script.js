$(document).ready(function() {
  console.log("Testing document ready- jquery");
  //   JavaScript for the slider
  $(".slider").slider({
    full_width: false,
    interval: 5000,
    transition: 800
  });
  //   End slider script
  
  // Hide Content/Show Content toggle
  $("#results-page-nav").on("click", function(event) {
    event.preventDefault();

    if ($("#zipCode").val().length === 5 && $.isNumeric($("#zipCode").val())){
      $("#landing-page-master").addClass("hide");
      $("#results-page-master").removeClass("hide");
      ajaxCallOpenWeatherAtZipCode($("#zipCode").val());
    } else {
      return; // do nothing
    }
  });
  
  // Hide Content/Show Content toggle
  $("#landing-page-nav").on("click", function(event) {
    event.preventDefault()

    $("#results-page-master").addClass("hide") // hide the results page
    $("#landing-page-master").removeClass("hide") // show the landing page
    $("#zipCode").on("click focusin", function() {this.value = "";}); // On focus, clear the input    
  });



  //Character Counter Script
  
  
    $('input#zipCode').characterCounter();
  

  // End Character Counter Script
});
