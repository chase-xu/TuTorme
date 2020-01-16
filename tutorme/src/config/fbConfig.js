 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 
 // Your web app's Firebase configuration
  var Config = {
    apiKey: "AIzaSyA-IMqgMCzH-13HIzHFZtZtHQH_VNt68V0",
    authDomain: "tutorme-5b529.firebaseapp.com",
    databaseURL: "https://tutorme-5b529.firebaseio.com",
    projectId: "tutorme-5b529",
    storageBucket: "tutorme-5b529.appspot.com",
    messagingSenderId: "868983935360",
    appId: "1:868983935360:web:2e389cac6bb76b347b3165",
    measurementId: "G-NTL9GBD7HB"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;