// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYdx9IrZ3V0HsEf6PeTmgPR3EZjp_-AnM",
  authDomain: "hotel-booking-project-aa7bf.firebaseapp.com",
  projectId: "hotel-booking-project-aa7bf",
  storageBucket: "hotel-booking-project-aa7bf.firebasestorage.app",
  messagingSenderId: "925640995095",
  appId: "1:925640995095:web:3ffe19d4000893d5800752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
