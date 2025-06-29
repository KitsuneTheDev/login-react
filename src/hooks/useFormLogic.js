import { useState, useEffect, useCallback } from "react";
import { validateEmail, validateFirstName, validateLastName, validatePassword } from '../utils/validate.js';
import { useUser } from "../context/UserContext.jsx";

function useFormLogic() {

    const { setFormData } = useUser();

    // FORM INPUT HOOKS
    const [checked, setChecked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState('');

    //INVALID FORM INPUT ERROR HOOKS
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [submitError, setSubmitError] = useState('');

    // VALID HOOKS
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const toggleChecked = () => {
        setChecked(prev => !prev);
    };

    const updateFirstName = (userInput) => {
        console.log(firstName);
        setFirstName(userInput);
    }

    useEffect(() => {
        if(validateFirstName(firstName) === true) {
            setFirstNameValid(true);
            setFirstNameError('');
            return;
        }
        setFirstNameError(() => validateFirstName(firstName));
        setFirstNameValid(false);
        console.log(firstNameError);
    }, [firstName]);

    const updateLastName = (userInput) => {
        setLastName(userInput);
    }

    useEffect(() => {
        if(validateLastName(lastName) === true) {
            setLastNameValid(true);
            setLastNameError('');
            return;
        }
        setLastNameError(() => validateLastName(lastName));
        setLastNameValid(false);
    }, [lastName]);

    const updateEmail = (userInput) => {
        setEmail(userInput);
    }

    useEffect(() => {
        if(validateEmail(email) === true) {
            setEmailValid(true);
            setEmailError('');
            return;
        }
        setEmailError(() => validateEmail(email));
        setEmailValid(false);
    }, [email]);

    const updatePassword = (userInput) => {
        setPassword(userInput);
    }

    useEffect(() => {
        if(validatePassword(password) === true) {
            setPasswordValid(true);
            setPasswordError('');
            return;
        }
        setPasswordError(() => validatePassword(password));
        setPasswordValid(false);
    }, [password]);

    useEffect(() => {
        setFormData({
            firstName,
            lastName,
            email,
            password,
            mode,
            checked,
        });
    }, [firstName, lastName, email, password, checked, mode])

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
        setMode,
        firstNameValid,
        lastNameValid,
        emailValid,
        passwordValid,
    };
}

export { useFormLogic };