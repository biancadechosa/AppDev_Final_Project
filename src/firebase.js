import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFxlUNxq-MxjnLKYTBSDb2n0i8gYSV0gg",
  authDomain: "sam1-9f4ed.firebaseapp.com",
  projectId: "sam1-9f4ed",
  storageBucket: "sam1-9f4ed.appspot.com",
  messagingSenderId: "698554699726",
  appId: "1:698554699726:web:232f94ea216f5d1e0ea59f",
  measurementId: "G-5DR3NCMK22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 