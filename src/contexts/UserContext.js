import { createContext, useState, useContext, useEffect } from "react";
import { getAuth, onIdTokenChanged, signOut } from 'firebase/auth';
import { getCookie } from "@/firebase/firebaseClient";
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem("loginTimestamp", Date.now());
    };
    const removeSession = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const cookie = getCookie('firebase_id_token');

        if (!cookie) {
            setUser(null);
            localStorage.removeItem('user');
            localStorage.removeItem("loginTimestamp");
            return;
        }

        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    return (
        <UserContext.Provider value={{ user, login, removeSession }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);