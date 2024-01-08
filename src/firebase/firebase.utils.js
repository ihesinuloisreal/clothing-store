// import { FirebaseApp } from "firebase/app";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore, getDoc, setDoc, doc} from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, createUserWithEmailAndPassword } from "firebase/auth";


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
// const app = FirebaseApp.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    const userDetail = await signInWithPopup(auth, provider);
    return userDetail;
};
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
}

 
export const Logout = () => signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

