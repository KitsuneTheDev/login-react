import { useCallback, useEffect, useState } from "react";
import CustomCheckbox from "./CustomCheckbox.jsx";
import InputError from "./InputError.jsx";
import { useFormLogic } from '../hooks/useFormLogic.js';
import { useUser } from '../context/UserContext.jsx';
import SubmitButton from "./SubmitButton.jsx";
import { signUpUser } from '../utils/supabaseUtils.js';
import { useNavigate } from "react-router-dom";


function SignupForm() {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    
    const {
        checked,
        toggleChecked,
        updateFirstName,
        firstNameError,
        updateLastName,
        lastNameError,
        updateEmail,
        emailError,
        updatePassword,
        passwordError,
        setMode,
        firstNameValid,
        lastNameValid,
        emailValid,
        passwordValid,} = useFormLogic();

    const [formValid, setFormValid] = useState(() => {
        return firstNameValid && lastNameValid && emailValid && passwordValid && checked;
    });

    useEffect(() => {
        setMode('signup');
    }, []);

    useEffect(() => {
        setFormValid(firstNameValid && lastNameValid && emailValid && passwordValid && checked);
        console.log(firstNameValid && lastNameValid && emailValid && passwordValid && checked);
    }, [firstNameValid, lastNameValid, emailValid, passwordValid, checked])

    const handleSubmit = useCallback(async () => {
        try {
            const result = await signUpUser(formData);
            if(result.error) window.alert(result.error);
            console.log(result.user);
            navigate('emailcfm');
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
                    <p className="pt-[2%] text-text">Already have an account? <span className="underline h-full hover:cursor-pointer" onClick={() => navigate('/login')}>Log in</span></p>
                </div>
                <div className="form-container pt-[4%] w-full">
                    <div className="user-name-container flex justify-center
                    lg:p-0 lg:gap-[1%]">
                        <div className="first-name-container relative w-[50%] pl-[4%] pr-[4%]
                        lg:w-[25%] lg:p-0">
                            <input type="text" placeholder="First Name" name="first name input" onChange={(event) => {
                                setFormData((prev) => {
                                    return {...prev, firstName:event.target.value}
                                })
                                updateFirstName(event.target.value)}}
                            className="placeholder-text bg-accent h-10 w-full rounded-lg pl-[9%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary
                            lg:pl-[14%] xl:pl-[14%]"
                            style={{backgroundColor: `${firstNameError ? `#EF5350` : ''}`, color:`${firstNameError ? `black` : ``}`}} />
                            <InputError.Inner error={firstNameError} />
                        </div>
                        <div className="last-name-container relative w-[50%] pl-[4%] pr-[4%] lg:w-[25%] lg:p-0">
                            <input type="text" placeholder="Last Name" name="last name input" onChange={(event) => {
                                setFormData((prev) => {
                                    return {...prev, lastName:event.target.value}
                                })
                                updateLastName(event.target.value)}}
                            className="placeholder-text bg-accent h-10 w-full rounded-lg pl-[9%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary
                            lg:pl-[14%] xl:pl-[14%]"
                            style={{backgroundColor: `${lastNameError ? `#EF5350` : ''}`, color:`${lastNameError ? `black` : ``}`}} />
                            <InputError.Inner error={lastNameError} />
                        </div>
                    </div>
                    <div className="user-email-container relative w-full pt-[4%] flex justify-center">
                        <input type="email" placeholder="Email" name="email input" onChange={(event) => {
                            setFormData((prev) => {
                                return {...prev, email:event.target.value}
                            })
                            updateEmail(event.target.value)}}
                        className="placeholder-text bg-accent h-10 w-[calc(100%-8%)] rounded-lg pl-[4%] pr-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary
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
                        className="placeholder-text bg-accent h-10 w-[calc(100%-8%)] rounded-lg pl-[4%] pr-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary
                        lg:w-[51%]"
                        style={{backgroundColor: `${passwordError ? `#EF5350` : ''}`, color:`${passwordError ? `black` : ``}`}} />
                        <InputError.Default error={passwordError} />    
                    </div>
                    <div className="terms-conditions-container h-10 pt-[4%] pl-[4%]
                    lg:pl-[24.5%]">
                        <CustomCheckbox checked={checked} onChange={() => toggleChecked()} >
                            <span className="text-background-secondary font-medium">I agree to the <a href="#">terms & conditions.</a></span>
                        </CustomCheckbox>
                    </div>
                    <div className="submit-button-container w-full h-10 flex justify-center mt-8
                    lg:mt-16">
                        {formValid ? <SubmitButton.Default context={"Create Account"} /> : <SubmitButton.Disabled context={"Create Account"} />}
                    </div>
                </div>
                <div className="signup-with-container w-full h-[40%] flex flex-col justify-center
                lg:gap-[10%] lg:w-[calc(51%+3rem)]">
                    <div className="sperator-container flex items-start justify-center">
                        <div className="w-[30%] h-5 flex items-center justify-center" ><hr className="w-full text-background-secondary"/></div>
                        <span className="h-5 w-[45%] flex items-center justify-center text-background-secondary font-medium">Or register with</span>
                        <div className="w-[30%] h-5 flex items-center justify-center" ><hr className="w-full text-background-secondary"/></div>
                    </div>
                    <div className="signup-with-google  flex justify-center items-center pt-8 text-2xl text-background-primary">
                        <button className="w-[90%] h-10 relative bg-accent rounded-lg flex justify-center items-center font-medium outline-2 outline-background-secondary outline-offset-2 active:scale-[95%]">
                            <span className="w-10 h-10 inline-block absolute left-0 bg-white rounded-lg text-background-secondary">
                                <span className="w-full h-full flex justify-center items-center text-2xl font-bold text-shadow-sm text-shadow-background-primary">G</span>
                            </span>
                        Google</button>
                </div>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;

/*
 TODO:
 -- ON SUBMIT CLEAR THE FORM
*/