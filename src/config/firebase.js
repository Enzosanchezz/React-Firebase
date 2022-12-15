import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFMJpFMoa0j7EVehTe4UynzfbpsgfJZfk",
  authDomain: "reactfirebase-d5cf6.firebaseapp.com",
  projectId: "reactfirebase-d5cf6",
  storageBucket: "reactfirebase-d5cf6.appspot.com",
  messagingSenderId: "862835197720",
  appId: "1:862835197720:web:3518ac08633c8036bf806d",
  measurementId: "G-ZY83P0MZ24"
};

export default firebase.initializeApp(firebaseConfig);
