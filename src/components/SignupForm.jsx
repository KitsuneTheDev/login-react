import { useState } from "react";

function SignupForm() {}

SignupForm.Mobile = () => {

    const [checked, setChecked] = useState(false);
    
    return(
        <div className="signup-container h-full w-full bg-background-primary flex flex-col justify-center items-center">
            <div className="info-container w-full h-[10%] bg-element-background-primary flex flex-col items-start justify-center pl-[4%]">
                <h1 className="text-text font-bold text-3xl">Create an account</h1>
                <h3 className="text-text text-lg font-medium">Already have an account? <a href="#" className="underline underline-offset-2">Log in</a></h3>
            </div>
            <form action="#" className="signup-form w-fullw h-[50%] text-background-primary font-medium flex flex-col gap-5 pt-[calc()]">
                <div className="user-name-container flex gap-2">
                    <div className="first-name-container">
                        <input type="text" name="user first name" id="userFirstName" placeholder="First name"
                        className="bg-background-secondary h-10 rounded-lg placeholder-background-primary pl-2 focus:outline-2 focus:outline-background-secondary/70" />
                    </div>
                    <div className="last-name-container">
                        <input type="text" name="user last name" id="userLastName" placeholder="Last Name"
                        className="bg-background-secondary h-10 rounded-lg placeholder-background-primary pl-2 focus:outline-2 focus:outline-background-secondary/70" />
                    </div>
                </div>
                <div className="user-email-container pt-4">
                        <input type="email" name="user email input" id="userEmailInput" placeholder="Email"
                        className="bg-background-secondary h-10 rounded-lg w-full placeholder-background-primary pl-2 focus:outline-2 focus:outline-background-secondary/70"/>
                </div>
                <div className="user-password-container pt-4">
                        <input type="password" name="user password input" id="userPasswordInput" placeholder="Enter your password"
                        className="bg-background-secondary h-10 rounded-lg w-full placeholder-background-primary pl-2 focus:outline-2 focus:outline-background-secondary/70"/>
                </div>
                <div className="terms-conditions-container pt-4">
                    <span id="userAgreementCheckbox"
                    className="custom-checkbox inline-block relative rounded-sm w-4 h-4 bg-background-secondary outline-1 outline-background-secondary/50">
                        {checked && <span className="tick absolute bottom-0 translate-y-1 text-green-600 font-bold text-2xl">&#10003;</span>}
                    </span>
                    <label htmlFor="userAgreementCheckbox" onClick={() => setChecked(prev => !prev)} className="text-text pl-2 h-4">I agree to the <a href="#" className="text-text">terms & conditions</a></label>
                </div>
                <div className="submit-button-container pt-4 w-full flex items-center justify-center">
                    <button type="submit" className="bg-text w-[60%] h-10 rounded-lg outline-2 outline-offset-1 outline-background-secondary active:scale-[95%]">Create Account</button>
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

    const [checked, setChecked] = useState(false);
    
    return(
        <div className="outer-container w-full h-full">
            <div className="banner-container hidden"></div>
            <div className="form-container w-full h-full">
                <div className="info-container h-[10%] w-full flex flex-col pl-[4%]">
                    <h2 className="pt-[4%] text-text text-3xl font-bold">Create an account</h2>
                    <p className="pt-[2%] text-text">Already have an account? <span className="underline hover:cursor-pointer">Log in</span></p>
                </div>
                <div className="form-container pt-[4%]">
                    <div className="user-name-container flex justify-center">
                        <div className="first-name-container w-[50%] pl-[4%] pr-[4%]">
                            <input type="text" placeholder="First Name"
                            className="placeholder-background-primary bg-background-secondary h-10 w-full rounded-lg pl-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary" />
                        </div>
                        <div className="last-name-container w-[50%] pl-[4%] pr-[4%]">
                            <input type="text" placeholder="Last Name"
                            className="placeholder-background-primary bg-background-secondary h-10 w-full rounded-lg pl-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary" />
                        </div>
                    </div>
                    <div className="user-email-container w-full pt-[4%] flex justify-center">
                        <input type="email" placeholder="Email"
                        className="placeholder-background-primary bg-background-secondary h-10 w-[calc(100%-8%)] rounded-lg pl-[4%] pr-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary" />
                    </div>
                    <div className="user-password-container w-full pt-[4%] flex justify-center">
                        <input type="password" placeholder="Password"
                        className="placeholder-background-primary bg-background-secondary h-10 w-[calc(100%-8%)] rounded-lg pl-[4%] pr-[4%] font-bold focus:outline-1 outline-offset-2 outline-background-secondary text-background-primary" />
                    </div>
                    <div className="terms-conditions-container h-10 pt-[4%]">
                        <label htmlFor="tncCheckbox" className="flex justify-start items-center pl-[4%] gap-[2%] hover:cursor-pointer" onClick={() => setChecked(prev => !prev)}>
                            <span className="w-4 h-4 inline-block rounded-sm bg-background-secondary relative"><input type="checkbox" name="terms conditions checkbox" id="tncCheckbox"
                            className="hidden" />{checked &&  <span className="tick absolute bottom-0 translate-y-1 text-green-600 font-bold text-2xl">&#10003;</span>}</span>
                            <span className="text-text font-medium">I agree to the <a href="#" className="text-text">terms & conditions</a></span>
                        </label>
                    </div>
                    <div className="submit-button-container"></div>
                </div>
                <div className="signup-with-container"></div>
            </div>
        </div>
    );
}

export default SignupForm;