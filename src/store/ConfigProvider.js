import React, { createContext, useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    const [ net, setNet ] = useState([])
    useEffect(() => {
        async function netInfo() {
            NetInfo.fetch().then(state => {
                return setNet({
                    state: state.type,
                    isConnected: state.isConnected,
                    details: state.details
                })
            })
        }
        netInfo()
    }, [])

    const info = {
        lastUpdateDate: '',     // date
        currentVersion: '',     // date
        latestVersion: '',      // date
        updated: true,          // boolean
        tag: '0.1.0 ',          // tag release = git version tag
        apiVersion: '',         // current version of BFF API
        userFistTime: '',
        network: net
    }
    return (
        <ConfigContext.Provider value={info}>
            { children }   
        </ConfigContext.Provider>
    )
}