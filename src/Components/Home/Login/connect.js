// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBX9rqWyb5zLdpy4Eh9u5ACUt04UegDHJE",
  authDomain: "wow-a1285.firebaseapp.com",
  projectId: "wow-a1285",
  storageBucket: "wow-a1285.appspot.com",
  messagingSenderId: "541353448068",
  appId: "1:541353448068:web:b65746ebdad1c5b30368d1",
  measurementId: "G-ETZDTP7JCR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
