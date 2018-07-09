// type.js
// document.addEventListener('DOMContentLoaded', function()
// {

//         Typed.new("#typed", {
//             stringsElement: document.getElementById('typed-strings'),
//             typeSpeed: 80,
//             backDelay: 1000,
//             loop: true,
//             contentType: 'html', // or text
//             // defaults to null for infinite loop
//             loopCount: null,
//             callback: function(){ foo(); },
//             resetCallback: function() { newTyped(); }
//         });

//         var resetElement = document.querySelector('.reset');
//         if(resetElement) {
//             resetElement.addEventListener('click', function() {
//                 document.getElementById('typed')._typed.reset();
//             });
//         }

//     });

//     function newTyped(){ /* A new typed object */ }

//     function foo(){ console.log("Callback"); 
// }

// herf div

 
// right form //

 jQuery(document).ready(function(e){
     $('.dropdown').hover(function(){ $('.dropdown-toggle', this).trigger('click'); });   
var positiveMargin = true;
jQuery('.quote-image').click(function () {
   if (positiveMargin) {
      positiveMargin = false;
      jQuery(".quoteForm").css({"right":"-300px"})  // Set the left to its calculated position
           .animate({"right":"0px"}, "fast");
           
           jQuery(".quote-image").css({"right":"0px"})  // Set the left to its calculated position
           .animate({"right":"249px"}, "fast");
           
           $(".quote-image-rep-hide").animate({right: "-300px"}, "fast");
    }
  else {
      positiveMargin = true;
       jQuery(".quote-image").css({"right":"249px"})  // Set the left to its calculated position
           .animate({"right":"0px"}, "fast");

      jQuery(".quoteForm").css({"right":"0px"})  // Set the left to its calculated position
           .animate({"right":"-300px"}, "fast");
           $(".quote-image-rep-hide").animate({right: "0px"}, "fast");
   }
});
      
       jQuery('.web-image').click(function () {

  if (!positiveMargin1) {
      var marginRight = "0px";
      positiveMargin1 = true;
  }
  else {
      var marginRight = "0px";
      positiveMargin1 = false;
  }
   jQuery('.webForm').animate({
             marginRight: marginRight
             }, {
             duration: 1000,
             specialEasing: {
             marginTop: 'easeOutBounce'
             },
             complete: function () {
             }
           });
   });
});
  

// navigation

 $(document).ready(function() { 
             $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll == 0){ 
                    $(".col-md-12.header-wrapper").removeClass("header-wrapper-new");
                    $(".navbar-nav > li > a ").removeClass("nav-li-color"); 
                }
                else
                {
                    $(".col-md-12.header-wrapper").addClass("header-wrapper-new");
                    $(".navbar-nav > li > a ").addClass("nav-li-color");
                              
                }
        });
});  

// clinet slider
