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


function showWeird() {
  var x = document.querySelector(".header")("weird-section-cover");
  x.style.display = "block";
};

function toggleCTA() {
  var x = document.getElementById("work");
  x.classList.remove('cop-button-test');
  x.classList.add('cop-button-test-real');
};

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

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
    document.getElementById("username-input").value = '';
    document.getElementById("country-input").value = '';
    document.getElementById("city-state-input").value = '';
    document.getElementById("position-input").value = '';
    document.getElementById("sentence-input").value = '';

  });
});
