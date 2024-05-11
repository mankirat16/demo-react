// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3q5tAe9qqmV_ETy6hFgHqZA__lew_PmY",
  authDomain: "ats-checker-f68ad.firebaseapp.com",
  projectId: "ats-checker-f68ad",
  storageBucket: "ats-checker-f68ad.appspot.com",
  messagingSenderId: "69999414292",
  appId: "1:69999414292:web:55d918ad3d4ef4024a6b01",
  measurementId: "G-9EH9HCQJ7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);