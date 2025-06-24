import { supabase } from './supabaseClient.js';

export async function signUpUser({ firstName, lastName, email, password }) {
    return await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { firstName, lastName },
        },
    });
}

export async function loginUser({ email, password }) {
    return await supabase.auth.signInWithPassword({
        email,
        password,
    });
}

export async function signOutUser() {
    return await supabase.auth.signOut();
}