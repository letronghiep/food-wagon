import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, updatePassword } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'

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
const db = getFirestore(firebaseApp)
export const auth = getAuth()


export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    let userData = {};
    if (!userSnapshot.exists()) {
        const createAt = new Date();
        const { displayName, email, uid } = userAuth;
        try {
            await setDoc(userDocRef, {
                uid,
                displayName,
                email,
                createAt,
                ...additionalInformation
            })
            userData = {
                uid,
                displayName,
                email,
                createAt,
                ...additionalInformation
            };
        } catch (error) {
            console.log(error)
        }
    } else {
        userData = userSnapshot.data();
        console.log("User data lay duoc ne:", userData);
        await updateDoc(userDocRef, {
            ...userData
        });
    }

    return userData;
}
export const createAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const onChangePassword = async (userAuth, newPassWord) => {
    return await userAuth.updatePassword(newPassWord)
}

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, callback)
}
