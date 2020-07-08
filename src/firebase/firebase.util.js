import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9vPsCYxJ_biE-k828T8sRlj-n2jvBm4c",
    authDomain: "e-stuffing-db.firebaseapp.com",
    databaseURL: "https://e-stuffing-db.firebaseio.com",
    projectId: "e-stuffing-db",
    storageBucket: "e-stuffing-db.appspot.com",
    messagingSenderId: "835117434601",
    appId: "1:835117434601:web:9f546b9646a68d9f565278",
    measurementId: "G-R82LY4MCRY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// always trigger the google popup when we use GoogleAuthProvider
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
