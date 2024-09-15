import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-a41b8.firebaseapp.com",
  projectId: "chat-app-a41b8",
  storageBucket: "chat-app-a41b8.appspot.com",
  messagingSenderId: "571669419443",
  appId: "1:571669419443:web:7aa754255e10b6663e67c6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db =  getFirestore()
export const storage =  getStorage()