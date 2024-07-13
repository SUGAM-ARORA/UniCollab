// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


const firebaseConfig = {
  // Your web app's Firebase configuration
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const provider = new GithubAuthProvider();

export { auth, googleProvider, provider};