type ValidationObject = {
    isValid: boolean;
    errors: string[];
}

export function passwordValidator(password: string): ValidationObject {
    let isPasswordValid = true;
    let hasUpper = false;
    const errors = [];

    password.split('').forEach((char) => {
        console.log(char);
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            hasUpper = true;
        }
    })

    if (hasUpper == false) { 
        isPasswordValid = false;
        errors.push("You must have at least one uppercase character in the password.");
    }

    if (password.length < 5) {
        isPasswordValid = false;
        errors.push("You must have at least five characters in the password.");
    } 
    
    if (password.length > 15) {
        isPasswordValid = false;
        errors.push("You must have no more than fifteen characters in the password.");
    }

    // checks string for numerical characters
    if (/\d/.test(password) == false) {
        isPasswordValid = false;
        errors.push("You must have at least one digit in the password.");
    }

    return {isValid: isPasswordValid, errors };
}