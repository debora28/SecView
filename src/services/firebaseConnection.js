import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBs75a0bBzAwwQUBhTAZ4DQ37ckz11rnPQ",
    authDomain: "secview-66c84.firebaseapp.com",
    databaseURL: "https://secview-66c84.firebaseio.com",
    projectId: "secview-66c84",
    storageBucket: "secview-66c84.appspot.com",
    messagingSenderId: "263167577924",
    appId: "1:263167577924:web:af9e816da41c8b9bcdd111",
    measurementId: "G-HBCDP8837J"
  };

  if (!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;