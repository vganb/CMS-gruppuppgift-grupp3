// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";

import {getAuth, } from "firebase/auth";
import { getStorage  } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDT8WLethL6D17GwIyhLzKds-j4GLAC42w" ,
  authDomain: "event-bb7e9.firebaseapp.com",
  projectId: "event-bb7e9",
  storageBucket: "gs://event-bb7e9.appspot.com",
  messagingSenderId: "864944223301",
  appId: "1:864944223301:web:4c358e3c28d07a137f9f2c"
};

// Initialize Firebase
const app = getApps().length ? getApp : initializeApp(firebaseConfig);

const db =  getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app)

export {db,storage , auth }