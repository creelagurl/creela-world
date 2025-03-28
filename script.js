// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

// Firebase configuration
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
const database = getDatabase(app);

// Sign-up function
window.signUp = function() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            return set(ref(database, "users/" + user.uid), { role: "user" });
        })
        .then(() => {
            document.getElementById("message").innerText = "Sign-up successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = "Sign-up failed: " + error.message;
        });
};

// Login function
window.login = function() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Login successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = "Login failed: " + error.message;
        });
};
