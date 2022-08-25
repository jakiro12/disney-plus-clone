// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAZfCoieEcHp9L6q26xbofDS6bWO-0vRs",
  authDomain: "disney-plus-clone-62e45.firebaseapp.com",
  projectId: "disney-plus-clone-62e45",
  storageBucket: "disney-plus-clone-62e45.appspot.com",
  messagingSenderId: "637185183195",
  appId: "1:637185183195:web:0a49986f8744aae86f6bfe",
  measurementId: "G-9C7PDSFW2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
const provider= new GoogleAuthProvider()
export const singInWithGoogle=()=>{
  signInWithPopup(auth,provider).then((results)=>{
    console.log(results.providerId)
    const getInGo=results.providerId
    return getInGo
  }).catch((error)=>{
    console.log(error)
  })
}