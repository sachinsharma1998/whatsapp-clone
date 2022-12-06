
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBIHWP80hIB7MfJlyyKHP7V_Yuv439fCrA",
    authDomain: "whatsapp-web-b773f.firebaseapp.com",
    projectId: "whatsapp-web-b773f",
    storageBucket: "whatsapp-web-b773f.appspot.com",
    messagingSenderId: "943200019074",
    appId: "1:943200019074:web:6e58b2356dd2a8e19fca9b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
