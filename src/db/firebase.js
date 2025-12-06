


import { initializeApp } from "firebase/app";
import { getDatabase, ref, set , onValue , remove   } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyARugKmr5qHd0bTydfzsFs6oWN694uKvBM",
  authDomain: "fir-overview-ff349.firebaseapp.com",
  projectId: "fir-overview-ff349",
  storageBucket: "fir-overview-ff349.firebasestorage.app",
  messagingSenderId: "795666167238",
  appId: "1:795666167238:web:c45cf674ba4fa5c6a72ec7",
  databaseURL:"https://fir-overview-ff349-default-rtdb.asia-southeast1.firebasedatabase.app/"

};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();

export {
    app,
    db,
    ref,
    set,
    onValue ,
    remove
}