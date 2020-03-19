$(document).ready(function() {
  console.log("Testing document ready- jquery");
  //   JavaScript for the slider
  $(".slider").slider({
    full_width: false,
    interval: 5000,
    transition: 800
  });
  //   End slider script

  //Character Counter Script
  
  $(document).ready(function() {
    $('input#zipCode').characterCounter();
  });

  // End Character Counter Script
});
