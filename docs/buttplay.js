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
      alert("Good luck, team!");
    })
    document.getElementById("submit-application").disabled = true;
    document.getElementById("submit-application").innerHTML = "Great 👍";
    document.getElementById("email-input").value = '';
    document.getElementById("username-input").value = '';
    document.getElementById("position-input").value = '';
    document.getElementById("word-input").value = '';

  });
});

// function formClear () {
//   document.querySelector(".form-field").value = '';
// };

// document.getElementById("submit-application").disabled = true;



// $('#submit-application').one('submit', function() {
//     $(this).find('input[type="submit"]').attr('onclick', 'this.style.opacity = "0.6"; return false;')
// });
