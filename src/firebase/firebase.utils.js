// import { FirebaseApp } from "firebase/app";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "@firebase/firestore";
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
    await signInWithPopup(auth, provider)
    // console.log(userDetail.user)
    // return userDetail;
    .then ((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    //     // The signed-in user info.
        const user = result.user;
        console.log(user.email)
        findAndCreateUser("/users/i44U3yyrmjtwTRZmhVBo/cartItems/jlHggepfn9bd0Ep4yLtY");
        // createUserWithEmailAndPassword(auth, user.email, "Password")
        //         .then((userCredential) => {
        //             // Signed up 
        //             const user = userCredential.user;
        //             // ...
        //         })
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             // ..
        //         });
        
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    // //     // The email of the user's account used.
    //     const email = error.customData.email;
    // //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    // //     // ...
    })
};

 
export const Logout = () => signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

const findAndCreateUser = async (path) => {
    const docRef = doc(firestore, path);
    const docSnap =  await getDoc(docRef);
    // const citiesRef = collection(firestore, dbName);
    console.log(docSnap.data());
    if (docSnap) {
        if (docSnap.exists()) {
            console.log("Document data:");
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    } else {
        console.log("No connection")
    }
    
}