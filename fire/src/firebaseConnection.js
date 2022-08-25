import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
let firebaseConfig = {
    apiKey: "AIzaSyDbNrsNsbjW01u5Szx_GwdUqHi_R2w7vCw",
    authDomain: "curso-d9dc0.firebaseapp.com",
    projectId: "curso-d9dc0",
    storageBucket: "curso-d9dc0.appspot.com",
    messagingSenderId: "824085297785",
    appId: "1:824085297785:web:58cba6e14e933c4f2cf2a8",
    measurementId: "G-EDCSLTP2CS"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
 