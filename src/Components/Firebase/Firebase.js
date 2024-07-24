// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBijC8S9eqfsv6FJ4-XfCJswmn9cxYqj80",
  authDomain: "unicollab-38f58.firebaseapp.com",
  projectId: "unicollab-38f58",
  storageBucket: "unicollab-38f58.appspot.com",
  messagingSenderId: "560255192831",
  appId: "1:560255192831:web:fd8abb0417b206a1ba86ca",
  measurementId: "G-1V1JC52J0Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth(firebaseApp);

export { auth, signInWithPopup, githubProvider, googleProvider, facebookProvider, GithubAuthProvider, FacebookAuthProvider, RecaptchaVerifier, signInWithPhoneNumber };
export { db, analytics, firebaseApp as app };
export default firebaseApp;
