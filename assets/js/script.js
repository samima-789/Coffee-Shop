$(document).ready(function(){
   $('.according-content').hide();
   $('#according-button-1').on('click', () =>{
    $('#according-content-1').toggle();
    $('#according-content-2').hide();
    $('#according-content-3').hide();
    $('#according-content-4').hide();
    $('#according-content-5').hide();
    $('#according-content-6').hide();
    $('#according-content-7').hide();
    $('#according-content-8').hide();
    $('#up-1').toggleClass('rotate');
    $('#up-2').removeClass('rotate');
    $('#up-3').removeClass('rotate');
    $('#up-4').removeClass('rotate');
    $('#up-5').removeClass('rotate');
    $('#up-6').removeClass('rotate');
    $('#up-7').removeClass('rotate');
    $('#up-8').removeClass('rotate');
   });

   $('#according-button-2').on('click', () =>{
    $('#according-content-2').toggle();
    $('#according-content-1').hide();
    $('#according-content-3').hide();
    $('#according-content-4').hide();
    $('#according-content-5').hide();
    $('#according-content-6').hide();
    $('#according-content-7').hide();
    $('#according-content-8').hide();
    $('#up-2').toggleClass('rotate');
    $('#up-1').removeClass('rotate');
    $('#up-3').removeClass('rotate');
    $('#up-4').removeClass('rotate');
    $('#up-5').removeClass('rotate');
    $('#up-6').removeClass('rotate');
    $('#up-7').removeClass('rotate');
    $('#up-8').removeClass('rotate');
   });

   $('#according-button-3').on('click', () =>{
    $('#according-content-3').toggle();
    $('#according-content-2').hide();
    $('#according-content-1').hide();
    $('#according-content-4').hide();
    $('#according-content-5').hide();
    $('#according-content-6').hide();
    $('#according-content-7').hide();
    $('#according-content-8').hide();
    $('#up-3').toggleClass('rotate');
    $('#up-2').removeClass('rotate');
    $('#up-1').removeClass('rotate');
    $('#up-4').removeClass('rotate');
    $('#up-5').removeClass('rotate');
    $('#up-6').removeClass('rotate');
    $('#up-7').removeClass('rotate');
    $('#up-8').removeClass('rotate');
   });

   $('#according-button-4').on('click', () =>{
    $('#according-content-4').toggle();
    $('#according-content-2').hide();
    $('#according-content-3').hide();
    $('#according-content-5').hide();
    $('#according-content-6').hide();
    $('#according-content-7').hide();
    $('#according-content-8').hide();
    $('#up-4').toggleClass('rotate');
    $('#up-2').removeClass('rotate');
    $('#up-3').removeClass('rotate');
    $('#up-1').removeClass('rotate');
    $('#up-5').removeClass('rotate');
    $('#up-6').removeClass('rotate');
    $('#up-7').removeClass('rotate');
    $('#up-8').removeClass('rotate');
   });

   $('#according-button-5').on('click', () =>{
    $('#according-content-5').toggle();
    $('#according-content-2').hide();
    $('#according-content-3').hide();
    $('#according-content-1').hide();
    $('#according-content-4').hide();
    $('#according-content-6').hide();
    $('#according-content-7').hide();
    $('#according-content-8').hide();
    $('#up-5').toggleClass('rotate');
    $('#up-2').removeClass('rotate');
    $('#up-3').removeClass('rotate');
    $('#up-1').removeClass('rotate');
    $('#up-4').removeClass('rotate');
    $('#up-6').removeClass('rotate');
    $('#up-7').removeClass('rotate');
    $('#up-8').removeClass('rotate');
   });

   $('#according-button-6').on('click', () =>{
    $('#according-content-6').toggle();
    $('#according-content-2').hide();
    $('#according-content-3').hide();
    $('#according-content-1').hide();
    $('#according-content-4').hide();
    $('#according-content-5').hide();
    $('#according-content-7').hide();
    $('#according-content-8').hide();
    $('#up-6').toggleClass('rotate');
    $('#up-2').removeClass('rotate');
    $('#up-3').removeClass('rotate');
    $('#up-1').removeClass('rotate');
    $('#up-5').removeClass('rotate');
    $('#up-6').removeClass('rotate');
    $('#up-7').removeClass('rotate');
    $('#up-8').removeClass('rotate');
   });

   $('#according-button-7').on('click', () =>{
    $('#according-content-7').toggle();
    $('#according-content-2').hide();
    $('#according-content-3').hide();
    $('#according-content-1').hide();
    $('#according-content-4').hide();
    $('#according-content-5').hide();
    $('#according-content-6').hide();
    $('#according-content-8').hide();
    $('#up-7').toggleClass('rotate');
    $('#up-2').removeClass('rotate');
    $('#up-3').removeClass('rotate');
    $('#up-1').removeClass('rotate');
    $('#up-4').removeClass('rotate');
    $('#up-5').removeClass('rotate');
    $('#up-6').removeClass('rotate');
    $('#up-8').removeClass('rotate');
   });

   $('#according-button-8').on('click', () =>{
    $('#according-content-8').toggle();
    $('#according-content-2').hide();
    $('#according-content-3').hide();
    $('#according-content-1').hide();
    $('#according-content-4').hide();
    $('#according-content-5').hide();
    $('#according-content-6').hide();
    $('#according-content-7').hide();
    $('#up-8').toggleClass('rotate');
    $('#up-2').removeClass('rotate');
    $('#up-3').removeClass('rotate');
    $('#up-1').removeClass('rotate');
    $('#up-5').removeClass('rotate');
    $('#up-6').removeClass('rotate');
    $('#up-7').removeClass('rotate');
    $('#up-4').removeClass('rotate');
   });
});



/*-- Counter Up Section --*/
$(document).ready(function(){
   if ($(".counter").length > 0) {
     $('.counter').counterUp({
       delay:10,
       time:1200,
     });
   }
 });