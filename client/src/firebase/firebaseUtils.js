import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyADJqp3_tQo-jpWTLi8n-X-iq7_IOwpjL0",
  authDomain: "clothing-application-ea471.firebaseapp.com",
  projectId: "clothing-application-ea471",
  storageBucket: "clothing-application-ea471.appspot.com",
  messagingSenderId: "1022488208098",
  appId: "1:1022488208098:web:34e17a03589369761db4bb",
  measurementId: "G-CW21ZZ0QM0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();
export const addCollectionAndDoc = async (collectionKey, objectToAdd) => {
  const collectionRef = fireStore.collection(collectionKey);

  const batch = fireStore.batch();

  console.log(collectionRef);

  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj); // assign obj value to document
  });
  return await batch.commit(); // return a promise to resolve the null value
};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
