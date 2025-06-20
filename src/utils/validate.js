export function validateFirstName(firstNameInput) {
    const firstNameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s-]{3,30}$/u;
    if(firstNameInput === '' || firstNameInput === undefined)  return;
    if(!firstNameInput || firstNameInput.trim().length === 0) return "This field is required";
    if(!firstNameRegex.test(firstNameInput)) return "Only letters & spaces (3-30)";
    return true; 
}

export function validateLastName(lastNameInput) {
    const lastNameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s-]{3,30}$/u;
    if(lastNameInput === '' || lastNameInput === undefined)  return;
    if(!lastNameInput || lastNameInput.trim().length === 0) return "This field is required";
    if(!lastNameRegex.test(lastNameInput)) return "Only letters & spaces (3-30)";
    return true; 
}

export function validateEmail(emailInput) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput === '' || emailInput === undefined) return;
    const trimmed = emailInput.trim();
    if(!trimmed) return "This field is required";
    if(!emailRegex.test(trimmed)) return "Please enter a valid email";
    return true;
}

export function validatePassword(passwordInput) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\-_+=])[A-Za-z\d!@#\$%\^&\*\-_+=]{7,15}$/;
    if(passwordInput === '' || passwordInput === undefined) return;
    const trimmed = passwordInput.trim();
    if(!trimmed) return "This field is required";
    if(!passwordRegex.test(trimmed)) return "Password must be 7–15 characters long and include at least one uppercase letter, one number, and one special character(! @ # $ % ^ & * - _ + =). No spaces allowed."
}