import React, { createContext, useState, useEffect } from 'react';
import { useUser } from '../../src/auth/useUser';
import { useToken } from '../../src/auth/useToken';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = useUser();
    const [ token, setToken, removeToken ]  =  useToken(); 
    const [auth, setAuth] = useState({
        email: user && user.email,
        id: user && user.id,
        token: user && user.token
    })
    async function logout() {
        removeToken()
        setAuth({
            email: null,
            id: null,
            token: null
        })
    }

    useEffect(() => {
        if (user) setAuth(user)
    }, [user])

    return (
        <AuthContext.Provider value={ { auth, setAuth, logout } }>
            { children }   
        </AuthContext.Provider>
    )
}