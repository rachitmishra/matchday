import { signInWithPhoneNumber, getAuth, RecaptchaVerifier } from "firebase/auth";
import firebase from "./config";

const auth = getAuth(firebase);
export function onAuthStateChanged(cb: any) {
  // return _onAuthStateChanged(auth, cb);
}

export async function signIn(phoneNumber: string) {
  try {
    await signInWithPhoneNumber(auth, phoneNumber, new RecaptchaVerifier(auth, 'recaptcha-container', {}));
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
