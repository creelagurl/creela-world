// ✅ Ensure Firebase is loaded before using it
if (typeof firebase === "undefined") {
    console.error("❌ Firebase SDK not loaded! Check script order in HTML.");
} else {
    console.log("✅ Firebase SDK loaded.");

    // ✅ Firebase configuration
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

    // ✅ Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const database = firebase.database();

    console.log("✅ Firebase initialized.");

    // ✅ Sign-up function
    window.signUp = function () {
        console.log("🔹 Sign-up button clicked.");

        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;

        if (!email || !password) {
            console.warn("⚠️ Email or password is empty.");
            document.getElementById("message").innerText = "Please fill in all fields.";
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("✅ User created:", userCredential.user);
                let user = userCredential.user;
                return database.ref("users/" + user.uid).set({ role: "user" });
            })
            .then(() => {
                document.getElementById("message").innerText = "Sign-up successful!";
            })
            .catch((error) => {
                console.error("❌ Sign-up error:", error.message);
                document.getElementById("message").innerText = "Sign-up failed: " + error.message;
            });
    };

    // ✅ Login function
    window.login = function () {
        console.log("🔹 Login button clicked.");

        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;

        if (!email || !password) {
            console.warn("⚠️ Email or password is empty.");
            document.getElementById("message").innerText = "Please fill in all fields.";
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("✅ User logged in:", userCredential.user);
                document.getElementById("message").innerText = "Login successful!";
            })
            .catch((error) => {
                console.error("❌ Login error:", error.message);
                document.getElementById("message").innerText = "Login failed: " + error.message;
            });
    };
}
