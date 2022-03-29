import { useState } from 'react';
import storage from '../api/storage'

export const useToken = () => {
    const [token, setTokenInternal] = useState( async () => {
        const result = await storage.getData('token');
        return result;
    });

    const setToken = (newToken) => {
        storage.saveAndUpdateData('token', newToken);
        setTokenInternal(newToken);
    }

    return  [ token, setToken ];
}