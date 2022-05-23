import { useState, useEffect, useRef } from 'react';
import { useToken } from './useToken';
import { Buffer } from 'buffer'; 

export const useUser = () => {
  const [ token, setToken ]  =  useToken();
  const [ user, setUser ] = useState();

  async function getPayloadFromToken (newToken) {
    console.log('token getPayloadFromToken');
    if (!token && !newToken) return
    const encodedPayload = token || newToken;
    const buffer = Buffer.from(encodedPayload.split('.')[1], 'base64').toString('utf-8');
    return JSON.parse(buffer);
  }

  async function setAutoUser (newToken) {
    if (!user && newToken) {
      await getPayloadFromToken(newToken).then((newUser) => {
        console.log("Realizando a autenticação de usuário ", newUser )
        setUser(newUser);
        console.log('user setAutoUser2', user);
      })
    }
  }

  useEffect( () => {
    console.log('token getPayloadFromToken', token)
    console.log('user getPayloadFromToken', user)
    if (!token && !user) {
      setUser(null);
    } else {
      getPayloadFromToken(token).then((user) => {
        setUser(user);
      })
    }
  }, [token]);

  return [ user, setUser, setAutoUser];
}