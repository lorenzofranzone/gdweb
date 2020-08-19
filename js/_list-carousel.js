$(document).ready(function(){

   var listing = $('filtered-properties').find('.grid-row');
   
   // Code
   $(".owl-carousel").owlCarousel({
            
      items:1,
      nav:true,
      navText: [
         '<i class="fas fa-chevron-left"></i>',
         '<i class="fas fa-chevron-right"></i>'
      ],
      dots: false,
      dotsEach: false,
      margin:10,
      loop:true,
      autoplay:false,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      
      responsive : {
         // breakpoint from 0 up
         0 : {
            items:1
         },
         // breakpoint from 576 up
         576 : {
            items:2
         },
         // breakpoint from 768 up
         768 : {
            items:1
         }
      }
      
   });
   
   
   //////////////////////////////////////////////////
   // F U N C T I O N S
   //////////////////////////////////////////////////
   
   // FX Name
   
   
   
   
//////////
});