import { useState, useEffect, useRef } from 'react';
import { useToken } from './useToken';
import { Buffer } from 'buffer'; 

export const useUser = () => {
  const [ token ]  =  useToken();
  const [ user, setUser ] = useState();

  async function getPayloadFromToken (newToken) {
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
      })
    }
  }

  useEffect( () => {
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