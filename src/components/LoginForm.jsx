import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormLogic } from '../hooks/useFormLogic.js';
import InputError from './InputError.jsx';
import SubmitButton from './SubmitButton.jsx';
import { loginUser } from '../utils/supabaseUtils.js';

export default function LoginForm() {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    
    const {
        updateEmail,
        emailError,
        updatePassword,
        passwordError,
        setMode,
        emailValid,
        passwordValid,} = useFormLogic();

    const [formValid, setFormValid] = useState(() => {
        return emailValid && passwordValid;
    });

    useEffect(() => {
        setMode('login');
    }, []);

    useEffect(() => {
        setFormValid(emailValid && passwordValid);
        console.log(emailValid && passwordValid);
    }, [emailValid, passwordValid])

    const handleSubmit = useCallback(async () => {
        try {
            const result = await loginUser(formData);
            if(result.error){
                window.alert(result.error);
                return;
            };
            console.log(result.user);
            navigate('/dashboard');
        } catch(error) {
            console.error(error);
        }
    }, [formData]);
    return(
    <div className="outer-container w-full h-full lg:w-[80%] lg:h-[80%] lg:bg-background-primary
    lg:rounded-2xl lg:outline-2 lg:outline-background-primary lg:outline-offset-2
    xl:w-[70%] xl:flex">
        <div className="banner-container hidden bg-[url(./assets/banner.jpg)] bg-cover rounded-l-2xl
        xl:inline-block xl:w-[50%] xl:bg-background-secondary"></div>
        <form className="form-container w-full h-full
        lg:flex lg:flex-col lg:items-center
        xl:w-[50%]"
        onSubmit={async (event) => {
            event.preventDefault();
            await handleSubmit();
        }} >
            <div className="info-container h-[10%] w-full flex flex-col pl-[4%]
            lg:p-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
                <h2 className="pt-[4%] text-text text-3xl font-bold">Create an account</h2>
                <p className="pt-[2%] text-text">You don't have an account? <span className="underline h-full hover:cursor-pointer" onClick={() => navigate('/signup')}>Sign up</span></p>
            </div>
            <div className="form-container pt-[4%] w-full">
                <div className="user-email-container relative w-full pt-[4%] flex justify-center">
                    <input type="email" placeholder="Email" name="email input" onChange={(event) => {
                        setFormData((prev) => {
                            return {...prev, email:event.target.value}
                        })
                        updateEmail(event.target.value)}}
                    className="placeholder-background-primary bg-background-secondary h-10 w-[calc(100%-8%)] rounded-lg pl-[4%] pr-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary
                    lg:w-[51%]"
                    style={{backgroundColor: `${emailError ? `#EF5350` : ''}`, color:`${emailError ? `black` : ``}`}} />
                    <InputError.Default error={emailError} />
                </div>
                <div className="user-password-container relative w-full pt-[4%] flex justify-center">
                    <input type="password" placeholder="Password" name="password input" onChange={(event) => {
                        setFormData((prev) => {
                            return {...prev, password:event.target.value}
                        })
                        updatePassword(event.target.value)}}
                    className="placeholder-background-primary bg-background-secondary h-10 w-[calc(100%-8%)] rounded-lg pl-[4%] pr-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary
                    lg:w-[51%]"
                    style={{backgroundColor: `${passwordError ? `#EF5350` : ''}`, color:`${passwordError ? `black` : ``}`}} />
                    <InputError.Default error={passwordError} />    
                </div>
                <div className="submit-button-container w-full h-10 flex justify-center mt-8
                lg:mt-16">
                    {formValid ? <SubmitButton.Default context={"Log in"} /> : <SubmitButton.Disabled context={"Login"} />}
                </div>
            </div>
            <div className="signup-with-container w-full h-[40%] flex flex-col justify-center
            lg:gap-[10%] lg:w-[calc(51%+3rem)]">
                <div className="sperator-container flex items-start justify-center">
                    <div className="w-[30%] h-5 flex items-center justify-center" ><hr className="w-full text-background-secondary"/></div>
                    <span className="h-5 w-[45%] flex items-center justify-center text-background-secondary font-medium">Or register with</span>
                    <div className="w-[30%] h-5 flex items-center justify-center" ><hr className="w-full text-background-secondary"/></div>
                </div>
                <div className="signup-with-google relative flex justify-center items-center pt-8 text-2xl text-background-primary">
                    <button className="w-[90%] h-10 bg-background-secondary rounded-lg flex justify-center items-center font-medium outline-2 outline-background-secondary outline-offset-2 active:scale-[95%]">
                        <span className="w-10 h-10 inline-block absolute left-0 translate-x-[calc(50%-0.25rem)] bg-white rounded-lg text-background-secondary">
                            <span className="w-full h-full flex justify-center items-center text-2xl font-bold text-shadow-sm text-shadow-background-primary">G</span>
                        </span>
                    Google</button>
            </div>
            </div>
        </form>
    </div>
);
}