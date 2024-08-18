// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMfddqNngjUcw6LiPyFvu1g3LIu7RqS6c",
  authDomain: "react-native-projects-9489c.firebaseapp.com",
  projectId: "react-native-projects-9489c",
  storageBucket: "react-native-projects-9489c.appspot.com",
  messagingSenderId: "452362569397",
  appId: "1:452362569397:web:b0bfe50671d828792320fc",
  measurementId: "G-X4WKGXRR21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



