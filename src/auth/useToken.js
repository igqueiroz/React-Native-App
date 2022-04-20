import { useState, useEffect } from 'react';
import storage from '../api/storage'

export const useToken = () => {
    const [ token, setTokenInternal ] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await storage.getData('token');
            setTokenInternal(data);
        }

        getData().catch(console.error);
    }, [token])

    const setToken = (newToken) => {
        storage.saveAndUpdateData('token', newToken);
        setTokenInternal(newToken);
    }

    const removeToken = () => {
        storage.removeData('token');
    }

    return [ token, setToken, removeToken ]; 
}