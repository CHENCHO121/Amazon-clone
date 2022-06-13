
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from 'firebase/app';
// import * as firebase from 'firebase'
// import firebase from 'firebase'
// require('firebase/auth')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX_LhvUlzKq6wMgHpraGdNsjPiaJeFEO8",
  authDomain: "clone-13a9b.firebaseapp.com",
  projectId: "clone-13a9b",
  storageBucket: "clone-13a9b.appspot.com",
  messagingSenderId: "605762254195",
  appId: "1:605762254195:web:48adbcd7a5b926dd2bc106",
  measurementId: "G-M050STYPQM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const db = firebaseApp.firestore();
 

export {db,auth};