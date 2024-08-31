// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import dotenv from "dotenv";

// dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "contact-app-d7b62.firebaseapp.com",
  projectId: "contact-app-d7b62",
  storageBucket: "contact-app-d7b62.appspot.com",
  messagingSenderId: "254106575683",
  appId: "1:254106575683:web:91f142b6fc248ba7e345f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);