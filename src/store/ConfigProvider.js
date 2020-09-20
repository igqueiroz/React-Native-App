import React, { createContext, useEffect, useState, useRef, useCallback } from 'react';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    
    const [netInfo, setNetInfo ] = useState(null)

    const [userFirstTime, setUserFirstTime] = useState(null)
    const apiInfo = {
        currentVersion: '',             // date
        latestVersion: '',              // date
        tag: '0.1.0 ',                  // tag release = git version tag
        apiVersion: '',                 // current version of BFF API
        hasCriticalUpdate: false,
        lastUpdateDate: new Date(),     // date
        updated: true,                  // boolean
    }
      
    async function getNetwork() {
        const response = await NetInfo.fetch().then(state => {
            return {
                state: state.type,
                isConnected: state.isConnected,
                details: state.details
            }
        })
        setNetInfo(response)
    }
       
    async function loadStorageData() {
        const storageUser = await AsyncStorage.getItem('@Agenda4Pets:user');
        const storageToken = await AsyncStorage.getItem('@Agenda4Pets:token');
        const userFirstTime = await AsyncStorage.getItem('@Agenda4Pets:userFirstTime')
        const getUserFirstTime = (!userFirstTime) ? userFirstTime : AsyncStorage.setItem('@Agenda4Pets:userFirstTime', 'true');
        setUserFirstTime(getUserFirstTime)
    }

    async function updateUserFirstTime () {
        await AsyncStorage.setItem('@Agenda4Pets:userFirstTime', 'false');
        return setUserFirstTime(false)
    }

    useEffect(() => {
        getNetwork()
        loadStorageData()
    }, [])
    
    return (
        <ConfigContext.Provider value={ {apiInfo, netInfo, userFirstTime, updateUserFirstTime }}>
            { children }   
        </ConfigContext.Provider>
    )
}