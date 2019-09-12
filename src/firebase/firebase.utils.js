import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5dXIQqGcUTOdfg37zKQuVu29OP0c3pBQ",
    authDomain: "crown-db-5bb69.firebaseapp.com",
    databaseURL: "https://crown-db-5bb69.firebaseio.com",
    projectId: "crown-db-5bb69",
    storageBucket: "",
    messagingSenderId: "20902845505",
    appId: "1:20902845505:web:4825f5994e0d8e6f68bac0"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase
    .auth
    .GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);