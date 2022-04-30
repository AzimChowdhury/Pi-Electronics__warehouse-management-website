// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPM0pE0KhgLKhKPIF4JHohDbx3nVDXyzU",
    authDomain: "pi-electronics.firebaseapp.com",
    projectId: "pi-electronics",
    storageBucket: "pi-electronics.appspot.com",
    messagingSenderId: "584447484658",
    appId: "1:584447484658:web:cf201e2db7801e8057266b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;