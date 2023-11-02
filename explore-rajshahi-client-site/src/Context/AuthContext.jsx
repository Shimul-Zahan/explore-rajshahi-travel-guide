import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config'
import axios from 'axios'
import useAxios from '../Hooks/useAxios'
export const MyContext = createContext(null)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const instance = useAxios();
    // console.log(instance)

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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            if (currentUser) {
                instance.post('/jwt', loggedUser)
                    .then(res => console.log(res.data));
            } else {
                instance.post('/logout', loggedUser)
                    .then(res => console.log(res.data));
            }
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