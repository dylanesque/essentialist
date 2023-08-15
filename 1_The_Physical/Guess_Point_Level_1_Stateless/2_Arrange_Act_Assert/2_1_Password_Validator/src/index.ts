export function passwordValidator(password: string): boolean {
    if (password.length < 5 || password.length > 15) {
        return false;
    }

    if (/\d/.test(password) == false) {
        return false;
    }

    return true
} 