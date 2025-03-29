// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2F3yKtcZU-yKt3wq9lA0jRkRGbM8aWgw",
  authDomain: "creela-world.firebaseapp.com",
  databaseURL: "https://creela-world-default-rtdb.firebaseio.com",
  projectId: "creela-world",
  storageBucket: "creela-world.firebasestorage.app",
  messagingSenderId: "390361485063",
  appId: "1:390361485063:web:fc25cd61a5d002e11cffa2",
  measurementId: "G-TED480L738"
};

// Initialize Firebase using the global `firebase` object
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Sign-up function
window.signUp = function() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            return database.ref("users/" + user.uid).set({ role: "user" });
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

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Login successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = "Login failed: " + error.message;
        });
};
