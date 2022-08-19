import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "cooking-98de6.firebaseapp.com",
  projectId: "cooking-98de6",
  storageBucket: "cooking-98de6.appspot.com",
  messagingSenderId: "603763789620",
  appId: API_ID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
