
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export const provider = new firebase.auth.GoogleAuthProvider();
export const provider2 = new firebase.auth.GithubAuthProvider();

const firebaseConfig = { // Have the firebase config here
  apiKey: "AIzaSyCjDNZRMwDugaxLruS1kTUOwEIGu98Bp2s",
  authDomain: "tallerjfbdofkau.firebaseapp.com",
  projectId: "tallerjfbdofkau",
  storageBucket: "tallerjfbdofkau.appspot.com",
  messagingSenderId: "289922575688",
  appId: "1:289922575688:web:e0515fc7462dd09711d77d",
  measurementId: "G-T5YZ5KSZ9V"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db , firebaseConfig};
