import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0RyUNcmsWgHhsNlvaN3CwQHmTBaYMktQ",
  authDomain: "carrot-market-85f77.firebaseapp.com",
  databaseURL:
    "https://carrot-market-85f77-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-85f77",
  storageBucket: "carrot-market-85f77.appspot.com",
  messagingSenderId: "291271889262",
  appId: "1:291271889262:web:a0c1e56d01be61a48ab17f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
