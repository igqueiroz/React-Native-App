import React, { createContext, useEffect, useState, useRef, useCallback } from 'react';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    
    const [netInfo, setNetInfo ] = useState(null);

    const [userFirstTime, setUserFirstTime] = useState(null);
    const [loading, setLoading] = useState(true)
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
        const storageUser = await AsyncStorage.getItem('@Agenda4Pets:userFirstTime');
        // Conversão de string para Boolean
        const loadUserFirstTime = (storageUser === 'true') ? true : false;
        // Verificando se existe retorno do AyncStorage
        const getUserFirstTime = (storageUser !== null)  ? loadUserFirstTime : await AsyncStorage.setItem('@Agenda4Pets:userFirstTime', 'true');
        // Exemplo de espera para Promise
        // await new Promise(resolve => setTimeout(resolve, 3000));
        await setUserFirstTime(getUserFirstTime)
        setLoading(false)
    }

    async function updateUserFirstTime () {
        await AsyncStorage.setItem('@Agenda4Pets:userFirstTime', 'false');
        setUserFirstTime(false)
    }

    async function loadApiInfo () {

    }
    
    useEffect(() => {
        getNetwork()
        // Teste para simular primeira entrada do usuário
        // AsyncStorage.removeItem('@Agenda4Pets:userFirstTime');
        // AsyncStorage.getItem('@Agenda4Pets:userFirstTime').then((t) => console.log('type', t))
        loadStorageData()
        loadApiInfo()
    }, [])

    return (
        <ConfigContext.Provider value={ {apiInfo, netInfo, userFirstTime, updateUserFirstTime, loading }}>
            { children }   
        </ConfigContext.Provider>
    )
}