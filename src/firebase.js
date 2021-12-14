import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD3g9tpu_jODbFTjF7C6yfyZ5dkt3f6EJo",
  authDomain: "chat-27241.firebaseapp.com",
  projectId: "chat-27241",
  storageBucket: "chat-27241.appspot.com",
  messagingSenderId: "230811082329",
  appId: "1:230811082329:web:6ede8d3cb27ff55c0f1b48"
};

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}