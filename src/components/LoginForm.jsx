function LoginForm() {
    return(
        <div className="form-container text-xl bg-amber-900 w-[100%] h-[100%] flex justify-center items-center">
            <form action="#" className="login-form flex flex-col justify-center items-center gap-10 w-[30%] h-[90%] bg-white rounded-xl" onSubmit={() => {console.log("Submitted")}}> 
                <div className="user-input-container relative cursor-default h-10 w-full">
                    <label htmlFor="userNameInput" className="absolute left-1/2 -translate-x-1/2">User Name</label>
                    <input type="text" id="userNameInput" className="cursor-default absolute left-1/2 -translate-x-1/2 border-1" />
                </div>

                <div className="user-input-container relative cursor-default h-10 w-full">
                    <label htmlFor="passwordInput" className="absolute left-1/2 -translate-x-1/2 w-[80%] h-10 flex items-center justify-center"></label>
                    <input type="password" id="passwordInput" className="cursor-default absolute left-1/2 -translate-x-1/2 border-1 rounded-xl w-[80%] h-10 text-center" placeholder="Password" />
                </div>

                <div className="user-login-button relative w-full h-10">
                    <label htmlFor="loginButton" className="absolute left-1/2 -translate-x-1/2 border-1 rounded-xl w-[80%] h-10 flex justify-center items-center cursor-pointer">Login</label>
                    <input type="submit" id="loginButton" className="absolute border-1 hidden" />
                </div>
            </form>
        </div>
    );
}

export default LoginForm;