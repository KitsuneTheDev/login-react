export function validateFirstName(firstNameInput) {
    const firstNameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s-]{3,30}$/u;
    if(firstNameInput === '' || firstNameInput === undefined)  return;
    const trimmed = firstNameInput.trim();
    if(!trimmed) return "This field is required";
    if(!firstNameRegex.test(trimmed)) return "Only letters and spaces are allowed (min 3, max 30)";
    return true; 
}

export function validateLastName(lastNameInput) {
    const lastNameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s-]{3,30}$/u;
    if(lastNameInput === '' || lastNameInput === undefined)  return;
    const trimmed = lastNameInput.trim();
    if(!trimmed) return "This field is required";
    if(!lastNameRegex.test(trimmed)) return "Only letters and spaces are allowed (min 3, max 30)";
    return true; 
}

export function validateEmail(emailInput) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput === '' || emailInput === undefined) return;
    const trimmed = emailInput.trim();
    if(!trimmed) return "This field is required";
    if(!emailRegex.test(emailInput)) return "Please enter a valid email";
    return true;
}