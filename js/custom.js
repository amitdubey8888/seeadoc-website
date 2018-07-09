$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
       if(this.hash.slice(1)!="timer"){
        $('html,body').animate({
          scrollTop: target.offset().top - 99
        }, 1000);
       }
        else{
      $('html,body').animate({
          scrollTop: target.offset().top }, 1000);
          
       }

       
        return false;
      }
    }
  });
});