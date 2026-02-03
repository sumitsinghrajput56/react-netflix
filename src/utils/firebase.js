// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5i-dZXzHY1NFJIh_0ZkgVRlVtDNHTqrM",
  authDomain: "netflixgpt-d2f11.firebaseapp.com",
  projectId: "netflixgpt-d2f11",
  storageBucket: "netflixgpt-d2f11.firebasestorage.app",
  messagingSenderId: "1040492979082",
  appId: "1:1040492979082:web:8b0c0ab4451c63cd745e73",
  measurementId: "G-001D8QFNSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);