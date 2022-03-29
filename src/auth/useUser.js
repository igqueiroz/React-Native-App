import { useState, useEffect } from 'react';
import { useToken } from './useToken';
import { Buffer } from 'buffer'; 

export const useUser = () => {
    console.log('token', token)
    const [ token ] = useToken();

    const getPayloadFromToken = (token) => {
        return Promise.resolve(token).then( async(value) => {
            const encodedPayload = value.split('.')[1];
            const buffer = Buffer.from(encodedPayload, 'base64').toString('utf-8');
            console.log('buffer', buffer)
            return buffer;
        })
    }

    const [user, setUser] = useState( () => {
        return Promise.resolve(token).then( (value) => {
            if (!value) return null;
            const tokenPayload = getPayloadFromToken(value);
            return tokenPayload;
        })
    });

    useEffect( () => {
        Promise.resolve(token).then( (value) => {
            if (!value) {
                setUser(null);
            } else {
                const user = getPayloadFromToken(token);
                console.log('useEffect', user);
                setUser(user);
            }
        })
    }, [token]);
    console.log('////////////////////////////');
    console.log('userUser', user);

    return Promise.resolve(user).then( (value) => {
        console.log('value', value)
        return value;
    })
}