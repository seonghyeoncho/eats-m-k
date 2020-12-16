import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDC9NSLxsA19zP9UDOfIji34xzUiUuj6zA",
    authDomain: "test-c457a.firebaseapp.com",
    databaseURL: "https://test-c457a.firebaseio.com",
    projectId: "test-c457a",
    storageBucket: "test-c457a.appspot.com",
    messagingSenderId: "984496161709",
    appId: "1:984496161709:web:1c82c8ccc2845902255724",
    measurementId: "G-R4HBDC14CG"
};
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const dbService =firebase.firestore();