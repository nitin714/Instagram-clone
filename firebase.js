// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK7GO5FrZONuGYOVnKLhZP8hcrKX_dNMM",
  authDomain: "instagram-ui-e144e.firebaseapp.com",
  projectId: "instagram-ui-e144e",
  storageBucket: "instagram-ui-e144e.appspot.com",
  messagingSenderId: "126179647740",
  appId: "1:126179647740:web:ec5283996908470dd4b779",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
