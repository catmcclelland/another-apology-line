// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtbXwZJr7G34pW1ksIfrx1oSCvbHW25x0",
  authDomain: "apology-line.firebaseapp.com",
  projectId: "apology-line",
  storageBucket: "apology-line.appspot.com",
  messagingSenderId: "724605836134",
  appId: "1:724605836134:web:9046af3f00e13a23c046a7",
  measurementId: "G-XHMJTRHN95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
