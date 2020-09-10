import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBoYg30H5KEMfgwe8zMIBI8TgNVsjvTR5M",
    authDomain: "clone-be6f9.firebaseapp.com",
    databaseURL: "https://clone-be6f9.firebaseio.com",
    projectId: "clone-be6f9",
    storageBucket: "clone-be6f9.appspot.com",
    messagingSenderId: "862720592235",
    appId: "1:862720592235:web:04cd3d65a569eb38e7a42e"
  };
  // Initialize Firebase

  const fire = firebase.initializeApp(firebaseConfig);
  const db = fire.firestore()
  const auth  = firebase.auth()
  export {db,auth}
 export default fire