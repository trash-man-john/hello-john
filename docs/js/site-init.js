// /docs/js/site-init.js

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCV8AXE2E8ko2XoCN4kV-HpW0BIZTgYkKM",
  authDomain: "tmj-site.firebaseapp.com",
  projectId: "tmj-site",
  storageBucket: "tmj-site.firebasestorage.app",
  messagingSenderId: "936738367249",
  appId: "1:936738367249:web:1f3901e489ac3dba968eb0",
  measurementId: "G-ZWM56M7ZFD"
};

// Initialize Firebase (only once)
if (!firebase.apps?.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    heap.identify(user.uid);
    // You can also do: heap.addUserProperties({ email: user.email });
  }
});
