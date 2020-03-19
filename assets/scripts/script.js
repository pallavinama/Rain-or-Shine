$(document).ready(function() {
  console.log("Testing document ready- jquery");
  //   JavaScript for the slider
  $(".slider").slider({
    full_width: false,
    interval: 5000,
    transition: 800
  });
  //   End slider script
  // Collapse Script
  $(".collapsible").collapsible();
  // End Collapse Script
  //Character Counter Script
  
  $(document).ready(function() {
    $('input#zipCode').characterCounter();
  });

  // End Character Counter Script
});
