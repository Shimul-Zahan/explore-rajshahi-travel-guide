// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd1GFfseFVLAOIheHW0TzoiFLUbaJvOFA",
    authDomain: "explore-rajshahi.firebaseapp.com",
    projectId: "explore-rajshahi",
    storageBucket: "explore-rajshahi.appspot.com",
    messagingSenderId: "810031987479",
    appId: "1:810031987479:web:a51e37def15f1657029552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth