export function validateFirstName(firstNameInput) {
    const firstNameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s-]{3,30}$/u;
    if(firstNameInput === '' || firstNameInput === undefined)  return;
    const trimmed = firstNameInput.trim();
    if(!trimmed) return "This field is required";
    if(!firstNameRegex.test(trimmed)) return "Only letters and spaces are allowed (min 3, max 30 characters)";
    return true; 

}

export function validateLastName() {}