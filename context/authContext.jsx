'use client'


import { usePathname, useRouter } from 'next/navigation';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});
const pathname = usePathname
// eslint-disable-next-line react-hooks/rules-of-hooks

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {setAuth(true)}

    if (!token) {setAuth(false)}

}, [auth]);

    return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider>
    );
}
