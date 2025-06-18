import { useState, useEffect } from "react";
import { validateEmail, validateFirstName, validateLastName, validatePassword } from '../utils/validate.js';

function useFormLogic() {

    // FORM INPUT HOOKS
    const [checked, setChecked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //INVALID FORM INPUT ERROR HOOKS
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const toggleChecked = () => {
        setChecked(prev => !prev);
    };

    const updateFirstName = (userInput) => {
        console.log(firstName);
        setFirstName(userInput);
    }

    useEffect(() => {
        if(validateFirstName(firstName) === true) {
            setFirstNameError('');
            return;
        }
        setFirstNameError(() => validateFirstName(firstName));
        console.log(firstNameError);
    }, [firstName]);

    const updateLastName = (userInput) => {
        setLastName(userInput);
    }

    useEffect(() => {
        if(validateLastName(lastName) === true) {
            setLastNameError('');
            return;
        }
        setLastNameError(() => validateLastName(lastName));
    }, [lastName]);

    const updateEmail = (userInput) => {
        setEmail(userInput);
    }

    useEffect(() => {
        if(validateEmail(email) === true) {
            setEmailError('');
            return;
        }
        setEmailError(() => validateEmail(email));
    }, [email]);

    const updatePassword = (userInput) => {
        setPassword(userInput);
    }

    useEffect(() => {
        if(validatePassword(password) === true) {
            setPasswordError('');
            return;
        }
        setPasswordError(() => validatePassword(password));
    }, [password]);

    return {
        checked,
        toggleChecked,
        updateFirstName,
        firstNameError,
        updateLastName,
        lastNameError,
        updateEmail,
        emailError,
        updatePassword,
        passwordError,
    };
}

export { useFormLogic };