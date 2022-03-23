import { useState, useEffect } from 'react';
import { useToken } from './useToken';
import { Buffer } from 'buffer';
export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = async(token) => {
        console.log('token <<<<<<<<<<<<<<<<<<<<', token)
        //  const encodedPayload = token.split('.')[1];
        const encodedPayload = 'asdsadqwdsadwd';
        const buffer = await Buffer.from(encodedPayload, 'base64')
        return JSON.parse('{ "teste": "teste"}');
        //return JSON.parse(buffer);
    }

    const [user, setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);

    return user;
}