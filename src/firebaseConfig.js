// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// 파이어스토어에 접근할수 있게해주는 ID 등등 - 로그인해야지 준다
const firebaseConfig = {
    apiKey: "AIzaSyCKMX2VavqNASFlm6HIUjWFIdEFNTuxihs",
    authDomain: "react-study-udemy.firebaseapp.com",
    databaseURL: "https://react-study-udemy-default-rtdb.firebaseio.com",
    projectId: "react-study-udemy",
    storageBucket: "react-study-udemy.appspot.com",
    messagingSenderId: "337894952821",
    appId: "1:337894952821:web:1000f3fee2944a22f38d3c",
    measurementId: "G-9LD8B15BZZ"
  };
  const app = initializeApp(firebaseConfig)

  export const firebase = getFirestore(app);