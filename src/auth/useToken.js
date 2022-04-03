import { useState } from 'react';
import storage from '../api/storage'

const getData = async () => {
    const result = await storage.getData('token');
    return result;
}

const resolvePromise = async (promise) => {
    const value_1 = await Promise.resolve(promise);
    return value_1;
}

export const useToken = () => {

    const [ token, setTokenInternal ] = useState(getData());


    const setToken = (newToken) => {
        storage.saveAndUpdateData('token', newToken);
        setTokenInternal(newToken);
    }
    console.log('Promise useToken >>>', resolvePromise(token))
    return [ resolvePromise(token), setToken ];
}