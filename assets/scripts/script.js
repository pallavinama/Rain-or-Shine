$(document).ready(function() {
  console.log("Testing document ready- jquery");
  //   JavaScript for the slider
  $(".slider").slider({
    full_width: false,
    interval: 5000,
    transition: 800
  });
  //   End slider script
  
  // Hide Content/Show Content toggle - Enter New zipcode button on results page
  $("#landing-page-nav").on("click", function(event) {
    console.log("testing results page button block");
    event.preventDefault()
    // Clearing Previously Entered ZipCode
    $("#zipCode").val("");
    $("#landing-page-master").removeClass("hide")
    $("#results-page-master").addClass("hide")
  });
  
 
//Character Counter Script
 $('input#zipCode').characterCounter();
// End Character Counter Script

   
  // Global Variable Declaration
  var firstContent = $("#first-content-block");
  var secondContent = $("#second-content-block");

  // ZIP Code Validation Script
 
  var submitButton = $("#results-page-nav");
  var reg = /^[0-9]+$/;
  // On click Event Handler
  submitButton.on("click", function(event)
  {
      event.preventDefault();
      var zipErrors = new Array();
      var tempzipCode = $("#zipCode").val().trim();
        
      if (tempzipCode != "")
      {
          if (tempzipCode.length != 5) {
            
            zipErrors[zipErrors.length] = "Please enter 5 digit ZIP Code";
          }
         
          if (!reg.test(tempzipCode)) {
            
            zipErrors[zipErrors.length] = "ZIP Code should contain numbers only";
          }

          console.log("zipErrors length "+zipErrors.length);
          if (zipErrors.length > 0){
            $("#results-page-master").addClass("hide")
           $("#landing-page-master").removeClass("hide")
            //$("#second-h4").remove();
            $("#first-error-p").remove();
            var p1 = $("<p>");
            p1.attr("id","first-error-p");
            //p1.html("errors "+zipErrors[0]+" "+zipErrors[1]);
            var errorString = "";
            var i;
            for(i = 0; i<zipErrors.length; i++){
              errorString += zipErrors[i]+"<br>";    
            }
            console.log("zipErrors "+errorString);
            p1.html(errorString);
            firstContent.append(p1);      
          } else {
            console.log("Entering else block");
            $("#landing-page-master").addClass("hide")
            $("#results-page-master").removeClass("hide")
            $("#first-error-p").remove();
          }
      };
});
});
 

 