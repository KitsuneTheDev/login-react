import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../utils/supabaseClient.js';
import { signUpUser, loginUser } from '../utils/supabaseUtils.js';
import { Navigate } from 'react-router-dom';

const UserContext = createContext();

export default function UserProvider({ children }) {

    // HOOKS
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});
    const [emailConfirmed, setEmailConfirmed] = useState(false);

    console.log("user in context -->", user);
    // HANDLE SUBMIT FUNCTION FOR SIGNUP AND LOGIN
    const handleSubmit = useCallback(async () => {
        console.log("Form submitting");
        setIsLoading(true);
        setError(null);

        const {mode, ...rest} = formData;
        console.log(`mode --> ${mode}
            data --> ${rest}`)
        try {
            let result;
            if(mode === 'signup') {
                result = await signUpUser(rest);
                if(result.error) window.alert(result.error);
                setUser(result.user);
                if(!result.user?.email_confirmed_at) {
                    setEmailConfirmed(false);
                };
                console.log("result -->", result);
            } else if(mode === 'login') {
                result = await loginUser(rest);
            } else {
                throw new Error("Invalid mode");
            }

            setIsLoading(false);
            return result;
        } catch(error) {
            setError(error.message);
            setIsLoading(false);
        }

    }, [formData]);

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
        handleSubmit,
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