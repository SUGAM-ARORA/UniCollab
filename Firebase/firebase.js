// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase8 products that you want to use
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;
