import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBGW_j0LEud3iyjGJevWLt4TetIscAWlyY",
  authDomain: "phonebook-381ff.firebaseapp.com",
  projectId: "phonebook-381ff",
  storageBucket: "phonebook-381ff.appspot.com",
  messagingSenderId: "474948812701",
  appId: "1:474948812701:web:8e56c64208b5d5883ff974"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);