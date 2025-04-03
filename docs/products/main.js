document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('info-modal');
  const openBtn = document.querySelector('.learn-more-btn');
  const closeBtns = modal.querySelectorAll('.close-btn, .alt-close-btn');

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});

  if (openBtn && modal && closeBtns) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });

    closeBtns.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // Optional: close when clicking outside the modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }
});


var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  document.querySelector(".header").style.height = window.innerHeight + "px";
});

function basicPopup(url) {
  const popupWindow = window.open(url, 'popUpWindow', 'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
};

// function pauseSong() {
//   var p = document.getElementById("pause");
//   p.style.display = "block";
// }
//
// function showCat() {
//   var c = document.getElementById("cat");
//   c.style.display = "block";
// }
//
// function hideSection() {
//   var g = document.getElementById("gay-section");
//   g.style.display = "none";
// }
//
// function showResults() {
//   var x = document.getElementById("gay-results");
//   x.style.display = "block";
// }

// $(document).ready(function() {
//   $(".toggle-button").click(function(){
//     $(".head").toggle(500);
//   });
//   $(".btn-warning").click(function(){
//     $(".animate").animate({top: '500px'});
//   });
// });
