import React, { Children, createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState()
    const user = {
        DisplayName: 'rubel'
    }

    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;