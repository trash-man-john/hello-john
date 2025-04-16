// /docs/js/auth.js

const auth = firebase.auth();
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const status = document.getElementById('auth-status');
const loginWrapper = document.querySelector(".login-wrapper");
const signupWrapper = document.querySelector(".signup-wrapper");
const toggleBtn = document.getElementById("toggle-button");
const resetForm = document.getElementById('reset-form');
const statusDiv = document.getElementById('reset-status');
const defaultHead = document.querySelector(".john-plus-head");

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      status.textContent = `✅ Logged in as ${cred.user.email}`;
      heap.identify(cred.user.uid);
      heap.addUserProperties({
        email: cred.user.email
      });
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
      heap.addUserProperties({
        email: email
      });
    })
    .catch((err) => {
      status.textContent = `❌ ${err.message}`;
    });
});

toggleBtn.addEventListener("click", function(e) {
  e.preventDefault();

  const isShowingLogin = loginForm.style.display === "block";

  if (isShowingLogin) {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    toggleBtn.textContent = "Have an account? Log In";
  } else {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    toggleBtn.textContent = "No account? Sign up";
  }
});


auth.onAuthStateChanged(user => {
  if (user) {
    status.textContent = `🔒 Already logged in as ${user.email}`;
    heap.identify(user.uid);
    document.getElementById("members-only").style.display = "block";
    signupWrapper.style.display = "none";
    loginWrapper.style.display = "none";
    toggleBtn.style.display = "none";
    defaultHead.style.display = "none";
  }
});

resetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const recoverEmail = document.getElementById('reset-email').value;

  auth.sendPasswordResetEmail(recoverEmail)
    .then(() => {
      statusDiv.textContent = "✅ Email sent, go check your inbox";
    })
    .catch((error) => {
      statusDiv.textContent = `❌ ${error.message}`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('info-modal');
  const openBtn = document.querySelector('.password-reset-btn');
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
