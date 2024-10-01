// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzRHEkzQhxPbzWIwQNaA9PKsBHGVgRxpo",
  authDomain: "react-disney-plus-app-66a50.firebaseapp.com",
  projectId: "react-disney-plus-app-66a50",
  storageBucket: "react-disney-plus-app-66a50.appspot.com",
  messagingSenderId: "982401396264",
  appId: "1:982401396264:web:414152bd09205792a6cf1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;