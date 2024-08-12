// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzpw3n7L3jTjziRfrfQhzhfk8mHB29KgA",
  authDomain: "reactchat-36ce1.firebaseapp.com",
  projectId: "reactchat-36ce1",
  storageBucket: "reactchat-36ce1.appspot.com",
  messagingSenderId: "24232480756",
  appId: "1:24232480756:web:1d5c46d02413472e6df3a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
