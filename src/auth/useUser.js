import { useState, useEffect } from 'react';
import { useToken } from './useToken';
import { Buffer } from 'buffer'; 


export const useUser = () => {
    const [ token ]  =  useToken(); 
    const [user, setUser] = useState(null);
    
    async function getPayloadFromToken () {
        if (!token) return
        const encodedPayload = token.split('.')[1];
        const buffer = Buffer.from(encodedPayload, 'base64').toString('utf-8');
        return JSON.parse(buffer);
    }
    useEffect( () => {
        getPayloadFromToken()
        if (!token) {
            setUser(null);
        } else {
            getPayloadFromToken(token).then((user) => {
                setUser(user);
            })
        }
    }, [token]);

    return user;
}