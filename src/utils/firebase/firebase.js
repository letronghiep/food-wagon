import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAPZMqlAfZWHiDWwZPpw8yVgxGaMyz0TaU",
    authDomain: "food-wagon-fb097.firebaseapp.com",
    projectId: "food-wagon-fb097",
    storageBucket: "food-wagon-fb097.appspot.com",
    messagingSenderId: "901295830775",
    appId: "1:901295830775:web:34cfe4d7a1778a06ca85f2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore()
export const auth = getAuth()

export const createAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}