import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config'
export const MyContext = createContext(null)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);

    const emailRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return (() => {
            unSubscribe();
        })
    }, [])

    const contextElement = {
        user,
        emailRegistration,
        emailLogin,
        googleLogin,
    };

    console.log(user);

    return (
        <MyContext.Provider value={contextElement}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthContext