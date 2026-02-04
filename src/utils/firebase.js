// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo3R8HF3JjDr8IS28684oRtgqzYY-Lm3k",
  authDomain: "netflixgpt-68a77.firebaseapp.com",
  projectId: "netflixgpt-68a77",
  storageBucket: "netflixgpt-68a77.firebasestorage.app",
  messagingSenderId: "356236125469",
  appId: "1:356236125469:web:c5df4bef6a127c075e6df4",
  measurementId: "G-5FB8GSPX77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();