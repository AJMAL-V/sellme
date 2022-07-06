// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxHc42wsmBY16r3VyP-9soYQe-5jUvdEE",
  authDomain: "olx-com-15368.firebaseapp.com",
  projectId: "olx-com-15368",
  storageBucket: "olx-com-15368.appspot.com",
  messagingSenderId: "233743171422",
  appId: "1:233743171422:web:0d4d172d635b40cd14d9cf",
  measurementId: "G-CN23HP4GXP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const Storage = firebase.storage();

export default firebase;

