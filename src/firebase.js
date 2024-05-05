// Importing necessary Firebase modules and React Toastify for notifications
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/cordova"; // Importing EmailAuthProvider for authentication via email
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration containing API keys and other credentials
const firebaseConfig = {
  apiKey: "AIzaSyAWFYwps27P11GL6y3Cf5WKTpZaBkB_daI",
  authDomain: "netflix-clone-88b35.firebaseapp.com",
  projectId: "netflix-clone-88b35",
  storageBucket: "netflix-clone-88b35.appspot.com",
  messagingSenderId: "806076385045",
  appId: "1:806076385045:web:391cb6f64d0afb24034b1c"
};

// Initializing Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Initializing Firebase authentication and Firestore database instances
const auth = getAuth(app);
const db = getFirestore(app);

// Function to handle user sign up
const signUp = async (name, email, password) => {
    try {
        // Creating user with email and password authentication
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user;
        // Adding user details to Firestore collection
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local", // Indicating local authentication method
            email,
        })
    } catch (error) {
        // Logging error to console and displaying it as a toast notification
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

// Function to handle user login
const login = async (email, password) => {
    try {
        // Signing in with email and password
        await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        // Logging error to console and displaying it as a toast notification
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

// Function to handle user logout
const logout = async () => {
    // Signing out the current user
    await signOut(auth)
}

// Exporting necessary variables and functions
export { auth, db, login, signUp, logout };
