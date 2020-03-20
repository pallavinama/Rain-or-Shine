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
    event.preventDefault()

    $("#landing-page-master").addClass("hide")
    $("#results-page-master").removeClass("hide")
  });
  
  // Hide Content/Show Content toggle
  $("#landing-page-nav").on("click", function(event) {
    event.preventDefault()
    
    $("#results-page-master").addClass("hide")
    $("#landing-page-master").removeClass("hide")
  });



  //Character Counter Script
  
  
    $('input#zipCode').characterCounter();
  

  // End Character Counter Script
});
