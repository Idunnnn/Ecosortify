import { sendLoginRequest } from "@/utils/routeHelper";
import { auth, provider } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  sendEmailVerification,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const continueWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result?.user;

  const token = await user.getIdToken();
  const response = await sendLoginRequest({ token });

  document.cookie = `firebase_id_token=${token}; path=/; max-age=3600; Secure; SameSite=Strict`;
  return response;
};

export const loginWithEmailAndPassword = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  const user = result.user;

  if (!user.emailVerified) {
    await logout();
    throw new Error("Mohon verifikasi email anda terlebih dahulu untuk melanjutkan");
  }

  const token = await user.getIdToken();

  try {
    const response = await sendLoginRequest({ token });

    if (!response.ok) {
      throw new Error("Login request failed");
    }

    document.cookie = `firebase_id_token=${token}; path=/; max-age=3600; Secure; SameSite=Strict`;

    return response;
  } catch (err) {
    throw err;
  }
};

export const getFreshToken = async () => {
  const idToken = await user.getIdToken(true);
  return idToken;
};
export const logout = async () => {
  document.cookie = "firebase_id_token=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict";
  await signOut(auth);
};

export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

export const isUserLogIn = () => {
  const auth = getAuth();

  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        alert(`User sudah login. Token: ${token}`);
        resolve(token);
      } else {
        alert("User belum login");
        resolve(null);
      }
    });
  });
};

export const registerUser = async (fullname, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await updateProfile(user, {
    displayName: fullname,
  });

  await sendEmailVerification(user);
  await signOut(auth);
};
