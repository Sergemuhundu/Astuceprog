import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBvF-sOWPmUMoVxNUShqRhg-c-ByfbGQgY",
  authDomain: "astuceprog-c0970.firebaseapp.com",
  projectId: "astuceprog-c0970",
  storageBucket: "astuceprog-c0970.appspot.com",
  messagingSenderId: "240972610256",
  appId: "1:240972610256:web:c2df027ad43613a7193cd5",
  measurementId: "G-L1S60FP8R4"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;