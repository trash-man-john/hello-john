window.addEventListener("load", function() {
  const form = document.getElementById('application');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Thanks. I will review your application and email you within 5 days with a decision");
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

// function formClear () {
//   document.querySelector(".form-field").value = '';
// };

// document.getElementById("submit-application").disabled = true;



// $('#submit-application').one('submit', function() {
//     $(this).find('input[type="submit"]').attr('onclick', 'this.style.opacity = "0.6"; return false;')
// });
