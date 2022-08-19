import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmZ4hpa82YBFCvuG2tQeYjWcS1UeGNdSk",
  authDomain: "cooking-98de6.firebaseapp.com",
  projectId: "cooking-98de6",
  storageBucket: "cooking-98de6.appspot.com",
  messagingSenderId: "603763789620",
  appId: "1:603763789620:web:c475e909e08a96c9669f61",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
