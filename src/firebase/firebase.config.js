// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUaCFit5lduOp54BPZ8jpGuj-3HvA7cy8",
    authDomain: "toys-animal.firebaseapp.com",
    projectId: "toys-animal",
    storageBucket: "toys-animal.appspot.com",
    messagingSenderId: "469267297507",
    appId: "1:469267297507:web:2406c312bd2cdfe08081d6",
    measurementId: "G-TRC95HGEPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;