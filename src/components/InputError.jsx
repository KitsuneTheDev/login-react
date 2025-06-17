export default function InputError({error}) {
    if(!error) {
        return;
    }
    return(
        <div className="error-container absolute w-full h-10 -translate-y-2">
            <div className="bubble-head h-2 flex left-4 relative">
                <span className="absolute h-2 w-2 bg-red-400 rotate-45 translate-y-[0.3rem] z-2 border-l-1 border-t-1 border-background-secondary"></span>
            </div>
            <div className="bubble-body absolute h-9 bg-red-400 text-xs rounded-xl pl-2 z-0 border-1 border-background-secondary text-background-secondary">
                <p>{error}</p>
            </div>
        </div>
    );
}