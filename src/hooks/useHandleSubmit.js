import { useCallback } from "react";
import { supabase } from '../utils/supabaseClient.js';

function useHandleSubmit({firstName, lastName, email, password, checked, mode}) {
    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email.trim().toLowerCase(),
            password,
            agreedToTerms: checked,
        }

        
        console.log("Form submitted:", formData);

    }, [firstName, lastName, email, password, checked, mode]);

    return { handleSubmit };
}

export { useHandleSubmit };