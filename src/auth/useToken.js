import { useState } from 'react';
import storage from '../api/storage'

export const useToken = () => {
    const [token, setTokenInternal] = useState(async () => {
        const getData = await storage.getData('token');
        console.log('getData', getData)
        return getData
    });

    const setToken = async (newToken) => {
        const save = await storage.saveAndUpdateData('token', newToken);
        setTokenInternal(newToken);
    }

    return [token, setToken];
}