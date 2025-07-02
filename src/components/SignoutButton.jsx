import { supabase } from "../utils/supabaseClient.js";

export default function SignoutButton({ context }) {

    return(
        <button
            type="submit" onClick={async () => supabase.auth.signOut()}
            className="signout-button w-50 h-10 bg-background-primary mt-[4%] text-text text-lg font-medium rounded-xl outline-2 outline-background-primary outline-offset-2
            hover:cursor-pointer disabled:bg-background-secondary/50 disabled:hover:cursor-default">
                {context}
        </button>
    );
}