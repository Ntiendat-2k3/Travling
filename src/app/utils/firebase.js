import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBedFutSnXyLqOMo0ZFNUvhEaUJn2E2LP4",
  authDomain: "travling-e4db7.firebaseapp.com",
  projectId: "travling-e4db7",
  storageBucket: "travling-e4db7.firebasestorage.app",
  messagingSenderId: "967445595888",
  appId: "1:967445595888:web:d8b3d150b42ca7f2f16435",
  measurementId: "G-89VMPP4CRP",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Export Firestore to use in other files
export { db, addDoc, collection };
