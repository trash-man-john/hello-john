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

// function sortTable(n) {
//   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//   table = document.getElementById("assTable");
//   switching = true;
//   dir = "asc";
//   while (switching) {
//     switching = false;
//     rows = table.rows;
//     for (i = 1; i < (rows.length - 1); i++) {
//       shouldSwitch = false;
//       x = rows[i].getElementsByTagName("TD")[n];
//       y = rows[i + 1].getElementsByTagName("TD")[n];
//       if (dir == "asc") {
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           shouldSwitch = true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//           shouldSwitch = true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       switchcount ++;
//     } else {
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }



// function formClear () {
//   document.querySelector(".form-field").value = '';
// };

// document.getElementById("submit-application").disabled = true;



// $('#submit-application').one('submit', function() {
//     $(this).find('input[type="submit"]').attr('onclick', 'this.style.opacity = "0.6"; return false;')
// });
