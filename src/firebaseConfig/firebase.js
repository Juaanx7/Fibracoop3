
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9-OtZqY-4c0Q_U8mff_8Z5kKLu5bmXuU",
  authDomain: "fibracoop-3.firebaseapp.com",
  projectId: "fibracoop-3",
  storageBucket: "fibracoop-3.appspot.com",
  messagingSenderId: "1024331277209",
  appId: "1:1024331277209:web:46019b921669b266f22908",
  measurementId: "G-93M59BWR67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);