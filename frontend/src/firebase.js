// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbjp4SAkZBTkIzLbsYVMwQ2r6l2pwyQfU",
  authDomain: "universe-aa215.firebaseapp.com",
  projectId: "universe-aa215",
  storageBucket: "universe-aa215.appspot.com",
  messagingSenderId: "225747250043",
  appId: "1:225747250043:web:28f2d2ee034e5d3dfdabde",
  measurementId: "G-2EYJ36V0YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider, app}