import firebase from "firebase";
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBq8LLFAovlpSbsODDDOoxgpa1yvUxJpJ8",
    authDomain: "olx-63029.firebaseapp.com",
    projectId: "olx-63029",
    storageBucket: "olx-63029.appspot.com",
    messagingSenderId: "710372980746",
    appId: "1:710372980746:web:50d4746a25f00c045387f3",
    measurementId: "G-14G92WCD6C"
  };

export default firebase.initializeApp(firebaseConfig)