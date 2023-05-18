import React, { Children, createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState()
    const user = {
        DisplayName: 'rubel'
    }

    const createRegisterUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loggedUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const authInfo = {
        // user
        createRegisterUser,
        loggedUser,
        signInGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;