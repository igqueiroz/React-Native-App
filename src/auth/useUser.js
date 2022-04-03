import { useState, useEffect } from 'react';
import { useToken } from './useToken';
import { Buffer } from 'buffer'; 


const resolveTokenPromise = () => {
    const resolveToken = useToken();
    console.log('resolveToken', resolveToken);
    const result = Promise.resolve(resolveToken).then( async (value1) => {
        return Promise.resolve(value1[0]).then((value) => {
            return [ value, value1[1] ]
        })
    })
}

export const useUser = () => {
    console.log('token do Thomas 1', resolveTokenPromise())
    let tokenPromise = resolveTokenPromise()
    if (!tokenPromise) return
    const token  = 'werew.werewr.'
    
    const getPayloadFromToken = () => {
        const encodedPayload = token.split('.')[1];
        //const buffer = Buffer.from(encodedPayload, 'base64').toString('utf-8');
        // console.log('buffer', JSON.parse(buffer).email)
        return encodedPayload;
    }

    const [user, setUser] = useState( () => {
        
            // if (!token) return null;
            const tokenPayload = getPayloadFromToken(token);
            return tokenPayload;
        
    });

    useEffect( () => {
        
            if (!token) {
                setUser(null);
            } else {
                const user = getPayloadFromToken(token);
                console.log('useEffect', user);
                setUser(user);
            }

    }, [token]);
    console.log('////////////////////////////');
    console.log('userUser', user);

    
        console.log('value', token)
        return token;
    
}