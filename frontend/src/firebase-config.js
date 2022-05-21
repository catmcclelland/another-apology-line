// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from "./App";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAtbXwZJr7G34pW1ksIfrx1oSCvbHW25x0",
  authDomain: "apology-line.firebaseapp.com",
  projectId: "apology-line",
  storageBucket: "apology-line.appspot.com",
  messagingSenderId: "724605836134",
  appId: "1:724605836134:web:9046af3f00e13a23c046a7",
  measurementId: "G-XHMJTRHN95",
};
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
