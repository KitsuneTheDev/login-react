import { useState, useEffect } from "react";
import { validateFirstName } from '../utils/validate.js';

function useFormLogic() {

    // FORM INPUT HOOKS
    const [checked, setChecked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    //INVALID FORM INPUT ERROR HOOKS
    const [firstNameError, setFirstNameError] = useState('');

    const toggleChecked = () => {
        setChecked(prev => !prev);
    };

    const updateFirstName = (userInput) => {
        console.log(firstName);
        setFirstName(userInput);
    }

    useEffect(() => {
        console.log("first name -->", firstName);
        setFirstNameError(() => validateFirstName(firstName));
        console.log(firstNameError);
    }, [firstName])

    return {
        checked,
        toggleChecked,
        updateFirstName,
        firstNameError,
    };
}

export { useFormLogic };