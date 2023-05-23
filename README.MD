// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyA5ejP8Fu46TiloKrx1wSRlTZQjoigjg3s",
authDomain: "bazylevychportfolio.firebaseapp.com",
projectId: "bazylevychportfolio",
storageBucket: "bazylevychportfolio.appspot.com",
messagingSenderId: "373473635416",
appId: "1:373473635416:web:eefdeef958302d080d2e2d",
measurementId: "G-9DLEXGHV4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
