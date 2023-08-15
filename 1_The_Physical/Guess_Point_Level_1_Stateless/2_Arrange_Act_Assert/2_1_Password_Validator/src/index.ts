export function passwordValidator(password: string): boolean {
    let hasUpper = false;
    password.split('').forEach((char) => {
        console.log(char);
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            hasUpper = true;
        }
    })

    if (hasUpper == false) { return false }

    if (password.length < 5 || password.length > 15) {
        return false;
    }

    // checks string for numerical characters
    if (/\d/.test(password) == false) {
        return false;
    }

    return true
}