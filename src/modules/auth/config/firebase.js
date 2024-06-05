/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyBYj5jJ2NgkFIqGsKh7o-PO2HiB_h6EDDQ",
  authDomain: "post-notifs.firebaseapp.com",
  projectId: "post-notifs",
  storageBucket: "post-notifs.appspot.com",
  messagingSenderId: "406762670130",
  appId: "1:406762670130:web:dac05f97e8d12a3334142b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
export const storage = getStorage(app)
export const messaging = getMessaging(app)