import { useEffect } from "react";
import CustomCheckbox from "./CustomCheckbox.jsx";
import InputError from "./InputError.jsx";
import { useFormLogic } from '../hooks/useFormLogic.js';

function SignupForm() {}

SignupForm.Mobile = () => {

    const { checked, toggleChecked, updateFirstName, firstNameError, updateLastName, lastNameError, updateEmail, emailError, updatePassword, passwordError, handleSubmit, setMode } = useFormLogic();
    
    useEffect(() => {
        setMode('signup');
    }, [])

    return(
        <div className="signup-container h-full w-full bg-background-primary flex flex-col justify-center items-center">
            <div className="info-container w-full h-[10%] bg-element-background-primary flex flex-col items-start justify-center pl-[4%]">
                <h1 className="text-text font-bold text-3xl">Create an account</h1>
                <h3 className="text-text text-lg font-medium">Already have an account? <a href="#" className="underline underline-offset-2">Log in</a></h3>
            </div>
            <form action="#" className="signup-form w-fullw h-[50%] text-background-primary font-medium flex flex-col gap-5 pt-[calc()]">
                <div className="user-name-container flex gap-2">
                    <div className="first-name-container relative">
                        <input type="text" name="user first name" id="userFirstName" placeholder="First name" onChange={(event) => updateFirstName(event.target.value)}
                        className="bg-background-secondary h-10 rounded-lg placeholder-background-primary pl-2 focus:outline-2 focus:outline-background-secondary/70"
                        style={{backgroundColor: `${firstNameError ? `#EF5350` : ``}`, color: `${firstNameError ? `black` : ``}`}} />
                        <InputError.Inner error={firstNameError} />
                    </div>
                    <div className="last-name-container">
                        <input type="text" name="user last name" id="userLastName" placeholder="Last Name" onChange={(event) => {updateLastName(event.target.value)}}
                        className="bg-background-secondary h-10 rounded-lg placeholder-background-primary pl-2 focus:outline-2 focus:outline-background-secondary/70"
                        style={{backgroundColor: `${lastNameError ? `#EF5350` : ``}`, color: `${lastNameError ? `black` : ``}`}} />
                        <InputError.Inner error={lastNameError} />
                    </div>
                </div>
                <div className="user-email-container pt-4">
                        <input type="email" name="user email input" id="userEmailInput" placeholder="Email" onChange={(event) => updateEmail(event.target.value)}
                        className="bg-background-secondary h-10 rounded-lg w-full placeholder-background-primary pl-2 focus:outline-2 focus:outline-background-secondary/70"
                        style={{backgroundColor: `${emailError ? `#EF5350` : ``}`, color: `${emailError ? `black` : ``}`}}/>
                        <InputError.Default error={emailError} />
                </div>
                <div className="user-password-container pt-4">
                        <input type="password" name="user password input" id="userPasswordInput" placeholder="Enter your password" onChange={(event) => updatePassword(event.target.value)}
                        className="bg-background-secondary h-10 rounded-lg w-full placeholder-background-primary pl-2 focus:outline-2 focus:outline-background-secondary/70"
                        style={{backgroundColor: `${passwordError ? `#EF5350` : ``}`, color: `${passwordError ? `black` : ``}`}}/>
                        <InputError.Default error={passwordError} />
                </div>
                <div className="terms-conditions-container pt-4">
                    <CustomCheckbox checked={checked} onChange={() => toggleChecked()} >
                        <span className="text-text font-medium">I agree to the <a href="#" className="underline underline-offset-2">terms & conditions.</a></span>
                    </CustomCheckbox>
                </div>
                <div className="submit-button-container pt-4 w-full flex items-center justify-center">
                    <button type="submit" onClick={handleSubmit}
                    className="bg-text w-[60%] h-10 rounded-lg outline-2 outline-offset-1 outline-background-secondary active:scale-[95%]">Create Account</button>
                </div>
            </form>
            <div className="signup-with-container w-full h-[40%]">
                <div className="sperator-container flex items-start justify-center">
                    <div className="w-[30%] h-5 flex items-center justify-center" ><hr className="w-full text-background-secondary"/></div>
                    <span className="h-5 w-[30%] flex items-center justify-center text-background-secondary font-medium">Or register with</span>
                    <div className="w-[30%] h-5 flex items-center justify-center" ><hr className="w-full text-background-secondary"/></div>
                </div>
                <div className="signup-with-google relative flex justify-center items-center pt-8 text-2xl text-background-primary">
                    <button className="w-[90%] h-10 bg-background-secondary rounded-lg flex justify-center items-center font-medium outline-2 outline-background-secondary outline-offset-2 active:scale-[95%]">
                        <span className="w-10 h-10 inline-block absolute left-0 translate-x-[calc(50%+0.25rem)] bg-white rounded-lg text-background-secondary">
                            <span className="w-full h-full flex justify-center items-center text-2xl font-bold text-shadow-sm text-shadow-background-primary">G</span>
                        </span>
                    Google</button>
                </div>
            </div>
        </div>
    );
}

SignupForm.Default =  () => {

    const {checked, toggleChecked, updateFirstName, firstNameError, updateLastName, lastNameError, updateEmail, emailError, updatePassword, passwordError, handleSubmit, setMode} = useFormLogic();
    
    useEffect(() => {
        setMode('signup');
    }, []);

    return(
        <div className="outer-container w-full h-full lg:w-[80%] lg:h-[80%] lg:bg-background-primary
        lg:rounded-2xl lg:outline-2 lg:outline-background-primary lg:outline-offset-2
        xl:w-[70%] xl:flex">
            <div className="banner-container hidden bg-[url(./assets/sunset-banner.jpg)] bg-cover rounded-l-2xl
            xl:inline-block xl:w-[50%] xl:bg-background-secondary"></div>
            <div className="form-container w-full h-full
            lg:flex lg:flex-col lg:items-center
            xl:w-[50%]">
                <div className="info-container h-[10%] w-full flex flex-col pl-[4%]
                lg:p-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
                    <h2 className="pt-[4%] text-text text-3xl font-bold">Create an account</h2>
                    <p className="pt-[2%] text-text">Already have an account? <span className="underline hover:cursor-pointer">Log in</span></p>
                </div>
                <div className="form-container pt-[4%] w-full">
                    <div className="user-name-container flex justify-center
                    lg:p-0 lg:gap-[1%]">
                        <div className="first-name-container relative w-[50%] pl-[4%] pr-[4%]
                        lg:w-[25%] lg:p-0">
                            <input type="text" placeholder="First Name" name="first name input" onChange={(event) => {updateFirstName(event.target.value)}}
                            className="placeholder-background-primary bg-background-secondary h-10 w-full rounded-lg pl-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary"
                            style={{backgroundColor: `${firstNameError ? `#EF5350` : ''}`, color:`${firstNameError ? `black` : ``}`}} />
                            <InputError.Inner error={firstNameError} />
                        </div>
                        <div className="last-name-container relative w-[50%] pl-[4%] pr-[4%] lg:w-[25%] lg:p-0">
                            <input type="text" placeholder="Last Name" name="last name input" onChange={(event) => {updateLastName(event.target.value)}}
                            className="placeholder-background-primary bg-background-secondary h-10 w-full rounded-lg pl-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary"
                            style={{backgroundColor: `${lastNameError ? `#EF5350` : ''}`, color:`${lastNameError ? `black` : ``}`}} />
                            <InputError.Inner error={lastNameError} />
                        </div>
                    </div>
                    <div className="user-email-container relative w-full pt-[4%] flex justify-center">
                        <input type="email" placeholder="Email" name="email input" onChange={(event) => {updateEmail(event.target.value)}}
                        className="placeholder-background-primary bg-background-secondary h-10 w-[calc(100%-8%)] rounded-lg pl-[4%] pr-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary
                        lg:w-[51%]"
                        style={{backgroundColor: `${emailError ? `#EF5350` : ''}`, color:`${emailError ? `black` : ``}`}} />
                        <InputError.Default error={emailError} />
                    </div>
                    <div className="user-password-container relative w-full pt-[4%] flex justify-center">
                        <input type="password" placeholder="Password" name="password input" onChange={(event) => {updatePassword(event.target.value)}}
                        className="placeholder-background-primary bg-background-secondary h-10 w-[calc(100%-8%)] rounded-lg pl-[4%] pr-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary
                        lg:w-[51%]"
                        style={{backgroundColor: `${passwordError ? `#EF5350` : ''}`, color:`${passwordError ? `black` : ``}`}} />
                        <InputError.Default error={passwordError} />    
                    </div>
                    <div className="terms-conditions-container h-10 pt-[4%] pl-[4%]
                    lg:pl-[24.5%]">
                        <CustomCheckbox checked={checked} onChange={() => toggleChecked()} >
                            <span className="text-text font-medium">I agree to the <a href="#">terms & conditions.</a></span>
                        </CustomCheckbox>
                    </div>
                    <div className="submit-button-container w-full h-10 flex justify-center mt-8
                    lg:mt-16">
                        <button
                        type="submit" onClick={handleSubmit}
                        className="submit-button w-[50%] bg-text text-background-primary rounded-xl outline-2 outline-background-secondary outline-offset-2 hover:cursor-pointer">
                            Create Account
                        </button>
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
                            <span className="w-10 h-10 inline-block absolute left-0 translate-x-[calc(50%+0.25rem)] bg-white rounded-lg text-background-secondary">
                                <span className="w-full h-full flex justify-center items-center text-2xl font-bold text-shadow-sm text-shadow-background-primary">G</span>
                            </span>
                        Google</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;

/*
 TODO:
 -- ON SUBMIT CLEAR THE FORM
*/