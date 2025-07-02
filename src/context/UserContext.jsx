import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../utils/supabaseClient.js';

const UserContext = createContext();

export default function UserProvider({ children }) {

    // HOOKS
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});
    const [emailConfirmed, setEmailConfirmed] = useState(false);

    // EVENT LISTENER FOR AUTH STATE CHANGING
    useEffect(() => {
        const { data:{subscription} } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
            if(session?.user?.email_confirmed_at) {
                setEmailConfirmed(true);
            }
        });

        console.log(subscription);

        return () => subscription?.unsubscribe?.();
    }, []);

    const values = {
        user,
        formData,
        setFormData,
        isLoading,
        error,
        emailConfirmed,
    };

    return(
        <UserContext.Provider value={ values } >
            { children }
        </UserContext.Provider>
    );
};

const useUser = () => useContext(UserContext);

export { useUser };