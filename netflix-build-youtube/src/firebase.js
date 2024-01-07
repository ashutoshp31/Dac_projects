import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCN6y93arjs6C0pmKv5OooxOLwTN8aThYA",
    authDomain: "netflix-clone-ecd2b.firebaseapp.com",
    projectId: "netflix-clone-ecd2b",
    storageBucket: "netflix-clone-ecd2b.appspot.com",
    messagingSenderId: "1042652862792",
    appId: "1:1042652862792:web:7b57babcfb0f51e73ffb7d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth} ;
  export default db;
