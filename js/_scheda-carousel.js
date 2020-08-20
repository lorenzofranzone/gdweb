$(document).ready(function(){
   
   // Code
   $("#owl-demo-scheda").owlCarousel({
            
      items:1,
      nav:true,
      navText: [
         '<i class="fas fa-chevron-left"></i>',
         '<i class="fas fa-chevron-right"></i>'
      ],
      dots: false,
      dotsEach: false,
      margin:0,
      loop:true,
      autoplay:false,
      autoplayTimeout:2000,
      autoplayHoverPause:false,
      
      responsive : {
         // breakpoint from 0 up
         0 : {
            items:1
         },
         // breakpoint from 768 up
         768 : {
            items:1
         }
      }
      
   });


   $(".owl-carousel-plan").owlCarousel({
            
      items:1,
      nav:true,
      navText: [
         '<i class="fas fa-chevron-left"></i>',
         '<i class="fas fa-chevron-right"></i>'
      ],
      dots: false,
      dotsEach: false,
      margin:0,
      loop:true,
      autoplay:false,
      autoplayTimeout:2000,
      autoplayHoverPause:false,
      
      responsive : {
         // breakpoint from 0 up
         0 : {
            items:1
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