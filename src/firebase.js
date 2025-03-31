// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app"; // Initialize Firebase
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAnalytics, logEvent } from "firebase/analytics"; // Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDJ1K8H8ApXnz-aPb_-nJnxp-WGu1QYLo",
  authDomain: "portfolio-analytics-e5340.firebaseapp.com",
  projectId: "portfolio-analytics-e5340",
  storageBucket: "portfolio-analytics-e5340.firebasestorage.app",
  messagingSenderId: "311840381629",
  appId: "1:311840381629:web:0098b1615b3aabf626f5d4",
  measurementId: "G-31558J5BYP",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Function to log page view
function logPageView() {
  logEvent(analytics, "page_view"); // Logs a page view event
}

// Export Firestore and Analytics, along with the log function
export { db, analytics, logPageView };
