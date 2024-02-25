import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAJFdddqRjmwr3K28HiVFHdgM1o74Omu7w",
    authDomain: "chitbuzz-b3a9c.firebaseapp.com",
    projectId: "chitbuzz-b3a9c",
    storageBucket: "chitbuzz-b3a9c.appspot.com",
    messagingSenderId: "1004021625659",
    appId: "1:1004021625659:web:2caa5cafa2eb2fa7c63d1e",
    measurementId: "G-53Z5R8GQW6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

