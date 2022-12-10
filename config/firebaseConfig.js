// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9ECq5LOdNLGC0Mm8DY74fj4IJmkf2e0Q",
  authDomain: "jenosize-cb070.firebaseapp.com",
  projectId: "jenosize-cb070",
  storageBucket: "jenosize-cb070.appspot.com",
  messagingSenderId: "27352816229",
  appId: "1:27352816229:web:ad5f71fff0196587fc448c",
  measurementId: "G-2GWE2Y2VL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);