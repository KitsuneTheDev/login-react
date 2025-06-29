

function Navbar() {
    return(
        <div className="navbar-contaier w-full h-full flex
        lg:bg-background-primary">
            <div className="name-container relative w-[10%]" >
                <h1 className="absolute left-[8%] top-[16%] text-3xl font-bold text-background-primary
                lg:text-background-secondary">KITSU</h1>
            </div>
            <div className="navbar-elements w-[80%]">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="misc-container w-[10%]"></div>
        </div>
    );
}

export default Navbar;