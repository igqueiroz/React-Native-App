import React, { createContext } from 'react'

export const ConfigContext = createContext()

export const ConfigProvider = ({ children }) => {
    const update = {
        lastUpdateDate: '',     // date
        currentVersion: '',     // date
        latestVersion: '',      // date
        updated: true,          // boolean
        tag: '0.1.0 ',          // tag release = git version tag
        apiVersion: '',         // current version of BFF API
        userFistTime: ''
    }

    return (
        <ConfigProvider.Provider value={update}>
            { children }   
        </ConfigProvider.Provider>
    )
}