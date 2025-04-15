// /docs/js/auth.js

const auth = firebase.auth();
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const status = document.getElementById('auth-status');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      status.textContent = `✅ Logged in as ${cred.user.email}`;
      heap.identify(cred.user.uid);
    })
    .catch((err) => {
      status.textContent = `❌ ${err.message}`;
    });
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      status.textContent = `✅ Signed up as ${cred.user.email}`;
      heap.identify(cred.user.uid);
    })
    .catch((err) => {
      status.textContent = `❌ ${err.message}`;
    });
});

function toggleSignup(show) {
  signupForm.style.display = show ? 'block' : 'none';
  loginForm.style.display = show ? 'none' : 'block';
}

auth.onAuthStateChanged(user => {
  if (user) {
    status.textContent = `🔒 Already logged in as ${user.email}`;
    heap.identify(user.uid);
  }
});
