import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: "linkdin-clone-6fa24.firebaseapp.com",
    projectId: "linkdin-clone-6fa24",
    storageBucket: "linkdin-clone-6fa24.appspot.com",
    messagingSenderId: "360079958268",
    appId: "1:360079958268:web:1d128f2afc68ddcd8b3779"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };