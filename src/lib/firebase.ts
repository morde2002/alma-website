import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyATeaTdU38VUad2GFh-ltwzgAB1plS5bus",
  authDomain: "alma-website-28dc8.firebaseapp.com",
  projectId: "alma-website-28dc8",
  storageBucket: "alma-website-28dc8.firebasestorage.app",
  messagingSenderId: "678341345371",
  appId: "1:678341345371:web:861244ad0c9a6d80093f7e"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
