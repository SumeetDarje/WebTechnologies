// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzGPaPS6vFJN6Fd0TgWRb0_ZImBTLY4UA",
  authDomain: "fruitecom-b2d5e.firebaseapp.com",
  projectId: "fruitecom-b2d5e",
  storageBucket: "fruitecom-b2d5e.firebasestorage.app",
  messagingSenderId: "455004250150",
  appId: "1:455004250150:web:46dbda1e23b6208d6ac6e7",
  measurementId: "G-3RE0QLLTPW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const analytics = getAnalytics(app);
export { db, auth, provider };