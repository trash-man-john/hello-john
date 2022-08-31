// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('main-navigation')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })

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

// $( document ).ready(function() {
//
//
// $('#thanks-button').click(function() {
//     $('#thanks').css({
//         'display': 'inline-block',
//     });
// });
// });


function balls() {
    var thanks = document.getElementById("thank-you");
    thanks.classList.toggle("thanks-show");
    var button = document.getElementById("thanks-button");
    button.classList.toggle("copy-button-after");
  }
