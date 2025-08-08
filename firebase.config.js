import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhx3RWysg1fktZt0C9sbGA44bXmkLoAWc",
  authDomain: "cities-europe.firebaseapp.com",
  projectId: "cities-europe",
  storageBucket: "cities-europe.appspot.com",
  messagingSenderId: "494789076674",
  appId: "1:494789076674:web:5250c50e7119342bc5fd5b",
  measurementId: "G-QLT57X0BS1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
