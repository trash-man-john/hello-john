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

function pauseSong() {
  var p = document.getElementById("pause");
  p.style.display = "block";
}

function showCat() {
  var c = document.getElementById("cat");
  c.style.display = "block";
}

function hideSection() {
  var g = document.getElementById("gay-section");
  g.style.display = "none";
}

function showResults() {
  var x = document.getElementById("gay-results");
  x.style.display = "block";
}
