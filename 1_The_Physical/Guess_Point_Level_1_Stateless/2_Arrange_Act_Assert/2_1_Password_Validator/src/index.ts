export function passwordValidator(password: string): boolean {
    if (password.length < 5) {
        return false;
    }

    return true
} 