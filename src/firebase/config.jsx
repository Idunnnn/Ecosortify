// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgbBD-jHM9pjbdyc4qsPzddRzW7lmuxlU",
  authDomain: "ecosortify-459004.firebaseapp.com",
  databaseURL: "https://ecosortify-459004-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecosortify-459004",
  storageBucket: "ecosortify-459004.firebasestorage.app",
  messagingSenderId: "838338694702",
  appId: "1:838338694702:web:ec47a011185afff16e99bf",
  measurementId: "G-BYMH30LC4K",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
