'use client'
 
import { createContext, useState, useEffect } from 'react';
 
export const AppContext = createContext({});
 
export default function AppProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // fetches user data from DB or cookie
    }, [])

    return <AppContext.Provider value={{user, setUser}}>{children}</AppContext.Provider>
    
}