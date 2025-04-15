// /docs/js/auth.js

const auth = firebase.auth();
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const status = document.getElementById('auth-status');
const loginWrapper = document.querySelector(".login-wrapper");
const signupWrapper = document.querySelector(".signup-wrapper");
const toggleBtn = document.getElementById("toggle-button");

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
  const confirmPassword = document.getElementById('signup-password-confirm').value;

  if (password !== confirmPassword) {
  status.textContent = "❌ Passwords do not match.";
  return;
}

  auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      status.textContent = `✅ Signed up as ${cred.user.email}`;
      heap.identify(cred.user.uid);
    })
    .catch((err) => {
      status.textContent = `❌ ${err.message}`;
    });
});

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const isShowingSignup = signupForm.style.display === "block";

  if (isShowingSignup) {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    toggleBtn.textContent = "No account? Sign up";
  } else {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    toggleBtn.textContent = "Back to Login";
  }
});


auth.onAuthStateChanged(user => {
  if (user) {
    status.textContent = `🔒 Already logged in as ${user.email}`;
    heap.identify(user.uid);
  }
});
