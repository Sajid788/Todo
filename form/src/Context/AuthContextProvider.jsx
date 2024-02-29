import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        token: '',
    });

    const login = (token) =>{
        setAuth({isAuth: true, token: token});
    }

    const logout = () =>{
      setAuth({isAuth: false, token: ''});
    }
    const {isAuth, token} = auth;
  return (
    <AuthContext.Provider value={{token, isAuth, login, logout}}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider
