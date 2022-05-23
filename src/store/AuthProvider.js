import React, { createContext, useState, useEffect } from 'react';
import { useUser } from '../auth/useUser';
import { useToken } from '../auth/useToken';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [ user, setUser, setAutoUser ] = useUser();
const [ token, setToken, removeToken ] = useToken();

  async function logout() {
    await removeToken();
    setUser(null)
    return { success: true }
  }

  return (
    <AuthContext.Provider value={ { logout, user, token, setToken, setAutoUser } }>
      { children }   
    </AuthContext.Provider>
  )
}