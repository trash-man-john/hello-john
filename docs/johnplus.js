  // 
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCA3Q3TlnldrdQ_u6gQfdpj4kMul0PmQ8c",
  //   authDomain: "tmj-site.firebaseapp.com",
  //   projectId: "tmj-site",
  //   storageBucket: "tmj-site.firebasestorage.app",
  //   messagingSenderId: "936738367249",
  //   appId: "1:936738367249:web:d6aac37ed4183da0968eb0",
  //   measurementId: "G-HZPCNMXH51"
  // };
  //
  // firebase.initializeApp(firebaseConfig);
  // const auth = firebase.auth();
  //
  // let isSignup = false;

  window.toggleMode = function () {
    isSignup = !isSignup;
    document.getElementById("form-title").innerText = isSignup ? "Sign Up" : "Login";
    document.getElementById("auth-button").innerText = isSignup ? "Sign Up" : "Login";
    document.querySelector(".toggle-mode").innerText = isSignup
      ? "Already have an account? Login"
      : "Don't have an account? Sign up";
    document.getElementById("error-message").innerText = "";
  };

  window.handleAuth = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-message");

    if (!email || !password) {
      errorMsg.innerText = "Both fields are required.";
      return;
    }

    const method = isSignup ? auth.createUserWithEmailAndPassword : auth.signInWithEmailAndPassword;
    method.call(auth, email, password)
      .catch(err => errorMsg.innerText = err.message);
  };

  window.logout = function () {
    auth.signOut();
  };

  auth.onAuthStateChanged(user => {
    document.getElementById("auth-container").style.display = user ? "none" : "block";
    document.getElementById("protected-content").style.display = user ? "block" : "none";
  });
