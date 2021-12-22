$(document).ready(function() {
  $(".toggle-button").click(function(){
    $(".hero").toggle(500);
  });
  $(".fade-button").click(function(){
    $(".fart").fadeToggle();
    $(".shit").fadeToggle("slow");
    $(".turd").fadeToggle(3000);
  });
  $(".panel").click(function(){
    $(".expand-panel").slideToggle("slow");
  });
  $(".btn-warning").click(function(){
    $(".animate").animate({top: '500px'});
  });
    // all custom jQuery will go here
});
