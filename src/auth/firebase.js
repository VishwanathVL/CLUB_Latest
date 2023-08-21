// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMQ3xzRBqG-cSc2dDtbeYlCcmalsDYKiI",
  authDomain: "club-house-5be70.firebaseapp.com",
  projectId: "club-house-5be70",
  storageBucket: "club-house-5be70.appspot.com",
  messagingSenderId: "743734894388",
  appId: "1:743734894388:web:3bf04b3deccb260b64cf61",
  measurementId: "G-MZ01MJHPHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
