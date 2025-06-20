export default function InputError() {};

InputError.Inner = ({error}) => {
    if(!error) {
        return;
    }
    return(
        <div className="error-container top-1/2 absolute w-full h-10 translate-y-1 hidden z-10
        lg:block">
            <div className="bubble-head h-2 flex left-4 relative">
                <span className="absolute h-2 w-2 bg-red-400 rotate-45 translate-y-[0.3rem] z-12 border-l-1 border-t-1 border-background-secondary"></span>
            </div>
            <div className="bubble-body absolute min-h-10 h-fit w-full bg-red-400 text-xs rounded-xl pl-2 z-10 border-1 border-background-secondary text-background-secondary pr-1">
                <p>{error}</p>
            </div>
        </div>
    );
}

InputError.Default = ({error}) => {
    if(!error) {
        return;
    }
    return(
        <div className="error-container absolute w-[51%] h-fit top-1/2 left-1/2 -translate-x-1/2 translate-y-7 hidden z-10
        lg:block">
            <div className="bubble-head h-2 flex left-4 relative">
                <span className="absolute h-2 w-2 bg-red-400 rotate-45 translate-y-[0.3rem] z-12 border-l-1 border-t-1 border-background-secondary"></span>
            </div>
            <div className="bubble-body absolute h-fit w-full min-h-10 bg-red-400 text-xs rounded-xl pl-2 z-10 border-1 border-background-secondary text-background-secondary">
                <p>{error}</p>
            </div>
        </div> 
    );
}