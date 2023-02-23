import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import 'firebase/compat/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDDuhY03UJq_LHI9PJUg9_gAW-cMBqfCMU",
  authDomain: "wesite-7ca20.firebaseapp.com",
  projectId: "wesite-7ca20",
  storageBucket: "wesite-7ca20.appspot.com",
  messagingSenderId: "655767465825",
  appId: "1:655767465825:web:722831e32c49970fe65f20"
};

firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default firebase;
export const provider = new GoogleAuthProvider();