// Import the functions you need from the SDKs you need
import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDJ1K8H8ApXnz-aPb_-nJnxp-WGu1QYLo",
  authDomain: "portfolio-analytics-e5340.firebaseapp.com",
  projectId: "portfolio-analytics-e5340",
  storageBucket: "portfolio-analytics-e5340.firebasestorage.app",
  messagingSenderId: "311840381629",
  appId: "1:311840381629:web:0098b1615b3aabf626f5d4",
  measurementId: "G-31558J5BYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
