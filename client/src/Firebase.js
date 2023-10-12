// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-z3J6WKY8W0mPIdt-HrmceGF3xq7yHZ0",
  authDomain: "netflix-react-project-22ac7.firebaseapp.com",
  projectId: "netflix-react-project-22ac7",
  storageBucket: "netflix-react-project-22ac7.appspot.com",
  messagingSenderId: "1094410790985",
  appId: "1:1094410790985:web:674cf56f796ed7937ef798",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
