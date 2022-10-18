import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDg76pFcd71A2K_Hl67BABD17stQPcgRSQ",
    authDomain: "contramatic-86478.firebaseapp.com",
    projectId: "contramatic-86478",
    storageBucket: "contramatic-86478.appspot.com",
    messagingSenderId: "888683511718",
    appId: "1:888683511718:web:78fce22920aa099b455967",
    measurementId: "G-XE9F52LZ8C",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
