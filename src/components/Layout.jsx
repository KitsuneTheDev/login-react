import { useState } from 'react';
import Navbar from './Navbar.jsx';
import SignupForm from './SignupForm.jsx';

function Layout() {

    const isMobile = /mobile/i.test(navigator.userAgent);
    console.log("isMobile -->", isMobile, "device type is -->", navigator.userAgent);
    
    return(
        <div className='min-h-[100vh] min-w-[100vw] h-[100vh] w-[100vw]'>
            <header className="bg-background-secondary w-full h-[10%] flex border-b-2 border-accent">
                {isMobile ? <Navbar.Mobile /> : <Navbar.Default />}
            </header>
            <main className="bg-background-primary w-full h-[86%]">
                <SignupForm />
            </main>
            <footer className="bg-background-secondary w-full h-[6%] border-t-2 border-accent">

            </footer>
        </div>
    );
}

export default Layout;