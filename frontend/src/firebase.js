import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3X1KtfjpHq2ISAn_Y76zkOliAoAz74zY",
  authDomain: "weather-25a6e.firebaseapp.com",
  projectId: "weather-25a6e",
  storageBucket: "weather-25a6e.firebasestorage.app",
  messagingSenderId: "932272186358",
  appId: "1:932272186358:web:cc13e12761b73937d21dd7",
  measurementId: "G-CRELKLF4WL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();