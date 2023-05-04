// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQRECYIlTiOto3znTUeIKG0who25m0A6Q",
  authDomain: "localeyes-auth.firebaseapp.com",
  projectId: "localeyes-auth",
  storageBucket: "localeyes-auth.appspot.com",
  messagingSenderId: "62358305489",
  appId: "1:62358305489:web:3d80412b1d97bbf86be3f0",
  measurementId: "G-8XSKZT9RC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;