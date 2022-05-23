import { useState, useEffect } from 'react';
import storage from '../api/storage'

export const useToken = () => {
    const [ token, setTokenInternal ] = useState(null);

    useEffect(() => {
        if (!token) {
            const getData = async () => {
                 const data = await storage.getData('token');
                 if (data) setTokenInternal(data);
             }
             getData().catch((e) => console.error(e));
        }
    }, [token])

    const setToken = async (newToken) => {
        await storage.saveAndUpdateData('token', newToken);
        return setTokenInternal(newToken);
    }

    const removeToken = async () => {
        const tokenRemoved = await storage.removeData('token');
        return tokenRemoved
    }

    return [ token, setToken, removeToken ];
}