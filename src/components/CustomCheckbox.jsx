import { forwardRef } from "react";

const CustomCheckbox = forwardRef(({ checked, onChange, children, ...props}, ref) => {
    return(
        <label {...props}
        className="flex items-center cursor-pointer select-none">
            <input type="checkbox"
            ref={ref}
            name="custom checkbox input"
            onChange={onChange}
            checked={checked}
            className="hidden" />
            <span
            className="w-4 h-4 inline-block rounded-sm bg-background-secondary relative mr-2 justify-center items-center">
                {checked && (<span className="absolute left-1/2 -translate-x-1/2 -translate-y-[45%] text-green-600 font-medium text-3xl">&#10003;</span>)}
            </span>
            {children}
        </label>
    );
});

export default CustomCheckbox;