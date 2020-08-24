import React, { createContext } from 'react'

const auth = {
    refreshToken: '',
    expirationDate: '',
    name: '',
    email: '',
    
}

export const ConfigContext = createContext()