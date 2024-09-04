// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "contact-app-392d4.firebaseapp.com",
  projectId: "contact-app-392d4",
  storageBucket: "contact-app-392d4.appspot.com",
  messagingSenderId: "277640529079",
  appId: "1:277640529079:web:2dcfaeacebdb3ed9aff932"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);