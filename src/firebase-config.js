import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD5AlDxVFgT-pe6yuxoN9aO6DE9eAXbLsY",
  authDomain: "freshenglish-8874e.firebaseapp.com",
  projectId: "freshenglish-8874e",
  storageBucket: "freshenglish-8874e.appspot.com",
  messagingSenderId: "924731722069",
  appId: "1:924731722069:web:3fd798e55d3b4d214787dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);