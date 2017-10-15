$(document).ready(function(){
  $("#carousel-button").click(function(){
     if ($("#carousel-button").children("span").hasClass('fa-pause')) {
         $("#mycarousel").carousel('pause');
         $("#carousel-button").children("span").removeClass('fa-pause');
         $("#carousel-button").children("span").addClass('fa-play');
     }
     else if ($("#carousel-button").children("span").hasClass('fa-play')){
         $("#mycarousel").carousel('cycle');
         $("#carousel-button").children("span").removeClass('fa-play');
         $("#carousel-button").children("span").addClass('fa-pause');
     }
 });

   $("#reservation-button").click(function(){
     $('#reservationModal').modal('show');
   });

   $("#login-button").click(function(){
     $('#loginModal').modal('show');
   });

});
