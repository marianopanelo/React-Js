import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB7KVEzYHcGEwaXL2gniEHTkn_3NxS56JM",
  authDomain: "react-panelo.firebaseapp.com",
  projectId: "react-panelo",
  storageBucket: "react-panelo.firebasestorage.app",
  messagingSenderId: "149481235962",
  appId: "1:149481235962:web:2c6a6f0d6354b25c34f043"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)