function Navbar() {};

Navbar.Default = () => {
    return(
        <div className="navbar-contaier w-[100%] h-[100%] flex">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

Navbar.Mobile = () => {
    return(
        <div className="navbar-container w-full h-full flex">
            <div className="menu-icon-container flex flex-col items-start justify-start gap-1 w-[20%] h-full pl-[4.8%] pt-[4%]">
                <span className="menu-icon-element bg-background-primary w-[45%] h-[5%] rounded-xl pt-1"></span>
                <span className="menu-icon-element bg-background-primary w-[45%] h-[5%] rounded-xl pt-1"></span>
                <span className="menu-icon-element bg-background-primary w-[45%] h-[5%] rounded-xl pt-1"></span>
            </div>
            <div className="name-container w-[60%] h-full flex justify-center mt-[3.2%]">
                <h1 className="text-xl font-bold text-background-primary"></h1>
            </div>
            <div className="misc-container w-[20%] h-full flex justify-end pt-[2.4%] pr-[4.8%]">
                <div className="cog-container relative bg-background-primary h-8 w-8 rounded-full">
                    <span className="cog-outer-element absolute bg-background-primary rounded-xl h-10 w-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                    <span className="cog-outer-element absolute bg-background-primary rounded-xl h-10 w-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-60"></span>
                    <span className="cog-outer-element absolute bg-background-primary rounded-xl h-10 w-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-300"></span>
                    <span className="cog-center absolute h-3 w-3 left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 bg-background-secondary rounded-full"></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;