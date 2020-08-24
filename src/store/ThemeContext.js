import React, { createContext } from 'react'
import { Platform } from 'react-native';

const navigationOptions = () => {
    const opt = {
        title: 'teste',
    }

    if (Platform.OS === "android") {
        opt.header = null
    }
    
    return opt
}

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
        height: ''
    }
    
}

export const ThemeContext = createContext()