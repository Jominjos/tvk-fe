// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(process.env.VITE_FIREBASE_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tvkblog-4b39f.firebaseapp.com",
  projectId: "tvkblog-4b39f",
  storageBucket: "tvkblog-4b39f.appspot.com",
  messagingSenderId: "397275444528",
  appId: "1:397275444528:web:0cd2a4892b4e7a970d44f5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
