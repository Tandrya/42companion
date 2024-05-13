// React Elements
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cursus, setCursus] = useState(null);

    const value = {
        user,
        setUser,
        cursus,
        setCursus
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
