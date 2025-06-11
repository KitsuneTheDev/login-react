import { useState } from "react";

function SignupForm() {

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

export default SignupForm;