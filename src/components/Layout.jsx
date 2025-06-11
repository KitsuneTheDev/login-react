import { useState } from 'react';
import Navbar from './Navbar.jsx';
import SignupForm from './SignupForm.jsx';

function Layout() {

    // const isMobile = /mobile/i.test(navigator.userAgent);
    console.log("isMobile -->", /*isMobile,*/ /mobile/i.test(navigator.userAgent), "device type is -->", navigator.userAgent);
    
    return(
        <div className='min-h-[100%] min-w-[100%] h-[100%] w-[100%] box-border'>
            <header className="bg-background-secondary w-full h-[8%]">
                {/*isMobile ? <Navbar.Mobile /> : <Navbar.Default />*/} <Navbar.Default />
            </header>
            <main className="bg-background-primary w-full h-[86.2%]">
                {<SignupForm />}
            </main>
            <footer className="bg-background-secondary w-full h-[5.8%] border-t-1 border-accent flex justify-between">
                <span className='text-element-text text-xs pl-[4%] pt-[4%] h-full text-background-primary font-medium'>© 2025 Kitsu. All rights reserved.</span>
                <a href="https://www.linkedin.com/in/ozancelikkol/" className='text-background-primary group text-lg pr-[4%] pt-[0%] gap-1 flex items-center font-medium'>
                <span className='linkedin-logo w-8 h-8 bg-white border-l-1 border-b-2 group-active:border-0 flex justify-center items-center pb-1 rounded-sm'>
                    <span className='text-background-secondary font-bold text-xl text-shadow-lg text-shadow-background-primary' >in</span>
                </span>
                LinkedIn</a>
            </footer>
        </div>
    );
}

export default Layout;