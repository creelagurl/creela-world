// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2F3yKtcZU-yKt3w9lA0jRkRGbM8aWgw",
    authDomain: "creela-world.firebaseapp.com",
    projectId: "creela-world",
    storageBucket: "creela-world.appspot.com",
    messagingSenderId: "390361485063",
    appId: "1:390361485063:web:fc25cd61a5d002e11cffa2",
    measurementId: "G-TED480L738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle login
window.login = function() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Login successful!";
            console.log("User logged in:", userCredential.user);
        })
        .catch((error) => {
            document.getElementById("message").innerText = "Login failed: " + error.message;
        });
};

// Function to handle sign up
window.signUp = function() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Sign-up successful!";
            console.log("User signed up:", userCredential.user);
        })
        .catch((error) => {
            document.getElementById("message").innerText = "Sign-up failed: " + error.message;
        });
};
