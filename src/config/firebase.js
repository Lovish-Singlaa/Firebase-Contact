// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "fir-contact-app-7299f.firebaseapp.com",
  projectId: "fir-contact-app-7299f",
  storageBucket: "fir-contact-app-7299f.appspot.com",
  messagingSenderId: "326954638333",
  appId: "1:326954638333:web:1198be7fa0ca1b4e799794"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);