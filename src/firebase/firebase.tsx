import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
//보안 사항
};


firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const dbService =firebase.firestore();
// export const storage = firebase.storage();
