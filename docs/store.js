var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  document.querySelector(".header").style.height = window.innerHeight + "px";
})

function basicPopup(url) {
  popupWindow = window.open(url, 'popUpWindow', 'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}

function hidePlaceholder() {
  var x = document.getElementById("page-default");
  x.style.display = "none";
}


$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
});


$(function(){
    $("#TabsClicked p").bind("click", function(){
        $("#TabsClicked p").removeClass("clicked"); // Remove all highlights
        $(this).addClass("clicked"); // Add the class only for actually clicked element
    });
});



$('.carousel').carousel({
  interval: false,
});

$('.carousel-inner').carousel({
  interval: false,
});

$('.carousel-item').carousel({
  interval: false,
});

$('.carousel-item.active').carousel({
  interval: false,
});
