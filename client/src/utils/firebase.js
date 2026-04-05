
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e6607.firebaseapp.com",
  projectId: "interviewiq-e6607",
  storageBucket: "interviewiq-e6607.firebasestorage.app",
  messagingSenderId: "53796110582",
  appId: "1:53796110582:web:1ff8701ddf72f7319e6cd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth,provider};