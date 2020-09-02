import React, { createContext } from 'react'
import { Platform } from 'react-native';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const colors = {
        light: {
            primary: '',
            secondary: '',
            buttonGradientCommon: '',
            background: ''
        },
        dark: {
            primary: '',
            secondary: '',
            buttonGradientCommon: '',
            background: ''
        },
        statusBar: {
            height: '11'
        }
    }

    return (
        <ThemeContext.Provider value={colors}>
            { children }   
        </ThemeContext.Provider>
    )
    
}