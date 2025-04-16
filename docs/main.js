document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('info-modal');
  const openBtn = document.querySelector('.learn-more-btn');
  const closeBtn = modal.querySelector('.close-btn');

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
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

$(document).ready(function() {
  $(".toggle-button").click(function(){
    $(".head").toggle(500);
  });
  $(".btn-warning").click(function(){
    $(".animate").animate({top: '500px'});
  });
});



window.addEventListener("load", function() {
  const form = document.getElementById('application');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    // var username = document.getElementById("email-input").value;
    // // Perform authentication (e.g., AJAX request to server)
    // // On successful authentication:
    // identifyUser(username, {
    //   "Application Status": "Submitted",
    //   "Signup Date": new Date().toISOString(),
    // });
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Good choice. Stay tuned, family");
    })
    document.getElementById("submit-application").disabled = true;
    document.getElementById("submit-application").innerHTML = "Thanks Team 👍";
    document.getElementById("email-input").value = '';
    // document.getElementById("username-input").value = '';
    // document.getElementById("country-input").value = '';
    // document.getElementById("city-state-input").value = '';
    // document.getElementById("position-input").value = '';
    document.getElementById("sentence-input").value = '';

  });
});
