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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
