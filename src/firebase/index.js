// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALdIflyCDBWh9fThf3XbbOVdlpQU0-pMU",
  authDomain: "mistrytech-45f9e.firebaseapp.com",
  projectId: "mistrytech-45f9e",
  storageBucket: "mistrytech-45f9e.appspot.com",
  messagingSenderId: "892169585422",
  appId: "1:892169585422:web:2a797e603016f971584d5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
