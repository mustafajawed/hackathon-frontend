// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqC4cJXbBX_2eIWCG2WeVMy11GaohyDZo",
  authDomain: "hackathon-frontend-54309.firebaseapp.com",
  projectId: "hackathon-frontend-54309",
  storageBucket: "hackathon-frontend-54309.firebasestorage.app",
  messagingSenderId: "943271960671",
  appId: "1:943271960671:web:7d2d104025552d76adfbea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };