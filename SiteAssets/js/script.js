//------------- fixed menu on scroll ------------
/* $(window).scroll(function(event){

  var yOffset = window.pageYOffset;
  var breakpoint = 50;
  if (yOffset > breakpoint){
    $(".menu").addClass('scroll');
  }else{
    $(".menu").removeClass('scroll');
  }

});

$(window).scroll(function(event){

  var yOffset = window.pageYOffset;
  var breakpoint = 50;
  if (yOffset > breakpoint){
    $(".responsive-menu").addClass('scroll');
  }else{
    $(".responsive-menu").removeClass('scroll');
  }

}); */


//-------------- Owl-Carousel --------------
$(document).ready(function() {
 
  $(".owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1024,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
 
  });
 
});

$(document).ready(function() {
 
  $(".service-owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
 
  });
 
});



//------------- Responsive menu  ------------
/* function openNav() {
  document.getElementById("mySidenav").style.width = "305px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 */

//------------- File Input Style ------------
/* $("[type=file]").on("change", function(){
  // Name of file and placeholder
  var file = this.files[0].name;
  var dflt = $(this).attr("placeholder");
  if($(this).val()!=""){
    $(this).next().text(file);
  } else {
    $(this).next().text(dflt);
  }
}); */
