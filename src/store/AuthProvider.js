import React, { createContext, useState } from 'react';
import login from '../api/login';
export const AuthContext = createContext([false, () => {}]);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        refreshToken: '',
        expirationDate: '',
        name: '',
        email: '',
        id: '',
        purgePassword: false
    })
    
    async function loadStorageData() {
        const storageUser = await AsyncStorage.multiGet(['@Agenda4Pets:user','@Agenda4Pets:token']);
    }

    async function getLogin() {
        const response = await login.login()
        setAuth(...auth, ...response.refreshToken)
        login.defaults.headers['Authorization'] = `Bearer ${response.refreshToken}`;
    }

    async function getLogout() {

    }

    useEffect(() => {
        loadStorageData()
    }, [])

    return (
        <AuthContext.Provider value={[state, setState]}>
            { children }   
        </AuthContext.Provider>
    )
}