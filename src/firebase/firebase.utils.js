import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCfFBUBOG0nodzpCKvbny8z4RY7An0AKQ0",
  authDomain: "crwn-clothingshop-fannoth.firebaseapp.com",
  projectId: "crwn-clothingshop-fannoth",
  storageBucket: "crwn-clothingshop-fannoth.appspot.com",
  messagingSenderId: "749265731261",
  appId: "1:749265731261:web:793a94b4b2292237ddc1d4",
  measurementId: "G-12BXZJ63X8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
