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
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth)
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);

    })
    return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections
        .docs
        .map(doc => {
            const { title, items } = doc.data();

            return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
            }
        });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[
            collection
            .title
            .toLowerCase()
        ] = collection;
        return accumulator;
    }, {})
}

const provider = new firebase
    .auth
    .GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;