import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_Pw5AH_6SKF0H6-skSD0bOWN4n7lzelw",
    authDomain: "twitter-clone-c6e93.firebaseapp.com",
    projectId: "twitter-clone-c6e93",
    storageBucket: "twitter-clone-c6e93.appspot.com",
    messagingSenderId: "1063213868981",
    appId: "1:1063213868981:web:098b60d3037adf1fae9bfc",
    measurementId: "G-XPVSR1SDC7"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db=firebaseApp.firestore();
   export default db;