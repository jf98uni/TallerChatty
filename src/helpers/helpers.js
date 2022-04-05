import { auth, provider,provider2 } from "../services/firebase";

export function signup(email,password){
    return auth.createUserWithEmailAndPassword(email,password)
}

export function signin(email,password){
    return auth.signInWithEmailAndPassword(email,password)
}

export function signInWithGoogle() {
    
    return auth.signInWithPopup(provider);
}
export function signInWithGitHub() {
    
    return auth.signInWithPopup(provider2);
  }
