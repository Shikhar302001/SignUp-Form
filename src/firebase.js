import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5VFYw5Toser2snvDtqjiih4j-0z9J48A",
  authDomain: "sign-up-form-d7e51.firebaseapp.com",
  projectId: "sign-up-form-d7e51",
  storageBucket: "sign-up-form-d7e51.appspot.com",
  messagingSenderId: "1086986489883",
  appId: "1:1086986489883:web:d4b4235321d913fb5328be"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };