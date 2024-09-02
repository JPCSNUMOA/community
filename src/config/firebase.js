// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK9_qV-zi_Z7qCSPEoFKo0p4s1Bvaoz9E",
  authDomain: "jpcsnumoa-4f943.firebaseapp.com",
  projectId: "jpcsnumoa-4f943",
  storageBucket: "jpcsnumoa-4f943.appspot.com",
  messagingSenderId: "711800449814",
  appId: "1:711800449814:web:147243ef8e7c7e50f37e37",
  measurementId: "G-X1XYBF2FJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);