import React, { createContext, useState, useEffect } from 'react';
import { useUser } from '../../src/auth/useUser';
import { useToken } from '../../src/auth/useToken';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = useUser();
    console.log('user AuthProvider' , user)
    const [ token, setToken, removeToken ] = useToken();
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

    async function login() {
        console.log('login token', token)
        console.log('login user', user)
        setAuth(user);
    }

    useEffect(() => {

        if (token) {
            setToken(token)
        }
        if (token && !user) {
            setAuth(user)
        }
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        console.log('useEffect token', token)
    }, [token])

    return (
        <AuthContext.Provider value={ { auth, setAuth, logout, login, tokenContext: token, user } }>
            { children }   
        </AuthContext.Provider>
    )
}