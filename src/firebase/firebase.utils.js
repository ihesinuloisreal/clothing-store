import { initializeApp } from "firebase/app";
import {getFirestore, getDoc, setDoc, doc, docs, collection, writeBatch} from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtKsNLUGNYyu3nnzBFOlTlQZ9XQF83gk8",
  authDomain: "crwn-db-e1db2.firebaseapp.com",
  projectId: "crwn-db-e1db2",
  storageBucket: "crwn-db-e1db2.appspot.com",
  messagingSenderId: "854341952026",
  appId: "1:854341952026:web:7b19e88a5808f2487067a3",
  measurementId: "G-9Q9NMXVX06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Sing in with google popup
export const signInWithGoogle = async () => {
  const userDetail = await signInWithPopup(auth, provider).then((result) => {
    const cred = GoogleAuthProvider.credentialFromResult(result);
    const token = cred.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const cred = GoogleAuthProvider.credentialFromError(error)
  });
  return userDetail;
};

// Find and create user function
export const findAndCreateUser = async (authUser, additionalData) => {
  if (!authUser) return;
  const docRef = doc(firestore, `users/${authUser.uid}`);
  const docSnap =  await getDoc(docRef);
  if (!docSnap.exists()) {
      const {displayName, email} = authUser;
      const createdAt = new Date();

      try {
        await setDoc(docRef, {
          displayName,
          email,
          createdAt,
          ...additionalData 
        });
      } catch (error) {
        console.log('Error creating user', error.message); 
      }
    }
  return docRef;
};

// Adding batch data to my dataase
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);

  objectsToAdd.forEach(obj => {
    const newDoc = doc(collectionRef);
    batch.set(newDoc, obj)
    console.log(newDoc)
  })
  return await batch.commit(); 


}

export const convertCollectionsSnapshot = (collections) => {
  const transforemedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transforemedCollection.reduce( (accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

// Logout Function
export const Logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  })};

