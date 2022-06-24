import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import {auth} from "../services/firebase";

export function signin(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signup(email: string, password: string) {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        sendEmailVerification(credentials.user).then(resolve).catch(reject);
      })
      .catch(reject);
  });
}

export function signinWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}

export function logout() {
  return signOut(auth);
}

export function sendPasswordResetMail(mail: string) {
  return sendPasswordResetEmail(auth, mail);
}
