import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN5H63PIzL4AKFisdXi1foZOCK0DB8nPY",
  authDomain: "travling-d1dd3.firebaseapp.com",
  projectId: "travling-d1dd3",
  storageBucket: "travling-d1dd3.firebasestorage.app",
  messagingSenderId: "13769217276",
  appId: "1:13769217276:web:4a6cab3459e692650a7379",
  measurementId: "G-4H2EKBPP0F",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Export Firestore to use in other files
export { db, addDoc, collection };
