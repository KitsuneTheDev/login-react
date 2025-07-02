import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function EmailConfirmation() {

    const navigate = useNavigate();
    const { user } = useUser();

    if(user) return <Navigate to='login' />

    return(
        <div
        className="email-confirm-container w-full h-full flex flex-col gap-10 items-center justify-center
        lg:h-[50%] lg:w-[95%] lg:outline-1 lg:outline-background-primary lg:outline-offset-2 lg:rounded-xl lg:gap-20
        xl:h-[95%] xl:gap-40 ">
            <h2
            className="text-2xl text-center text-accent
            lg:text-background-primary lg:text-3xl
            xl:text-4xl ">
                Almost there! Check your inbox to confirm your email
            </h2>
            <div
            className="email-confirm h-fit p-2 w-[95%] bg-background-secondary relative rounded-xl
            flex items-center justify-center
            lg:bg-background-primary
            xl:text-3xl">
                <p
                className="text-center text-xl h-fit text-background-primary
                lg:text-text lg:text-2xl">
                    If you don't see the email, check your spam folder or try
                    <span className="underline underline-offset-2 hover:cursor-pointer"
                    onClick={() => navigate('signup')}> signing up</span> again.
                </p>
            </div>
        </div>
    );
}