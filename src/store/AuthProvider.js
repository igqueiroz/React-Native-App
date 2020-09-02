import React, { createContext, useState } from 'react'

export const AuthContext = createContext([false, () => {}])

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState(false)
    const auth = {
        refreshToken: '',
        expirationDate: '',
        name: '',
        email: '',
        id: '',
        purgePassword: false
    }
    return (
        <AuthContext.Provider value={[state, setState]}>
            { children }   
        </AuthContext.Provider>
    )
}