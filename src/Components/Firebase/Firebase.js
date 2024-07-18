// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, googleProvider, GithubAuthProvider };
export { db, analytics, app };
export default app;