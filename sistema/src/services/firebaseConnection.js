import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyArGGKiQUSg2KyYYN3Uz-hS15Nb_76uGg8",
    authDomain: "sistema-b78d1.firebaseapp.com",
    projectId: "sistema-b78d1",
    storageBucket: "sistema-b78d1.appspot.com",
    messagingSenderId: "892286762910",
    appId: "1:892286762910:web:701a3419f8adc7a26de08f",
    measurementId: "G-4JP428KCNV"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;