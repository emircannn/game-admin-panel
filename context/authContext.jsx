'use client'


import axios from 'axios';
import { usePathname } from 'next/navigation';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});
const pathname = usePathname
// eslint-disable-next-line react-hooks/rules-of-hooks

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
        const verifyToken = async () => {
            try {
                const res = await axios.get(`${process.env.REQUEST}admin/verifyToken`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAuth(res.data.data)
            } catch (error) {
                setAuth(false);
                sessionStorage.removeItem('adminToken');
            }
        };
        verifyToken(); 
    }

    if (!token) {setAuth(false), sessionStorage.removeItem('adminToken');}

}, [auth]);

    return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider>
    );
}
