export function reverseAString(str: string) {
    return str.toLowerCase().split("").reverse().join("");
}

export function checkPalindrome(str: string) {
    let reversed = reverseAString(str);

    str = str.replace(/\s+/g, '');
    reversed = reversed.replace(/\s+/g, '');
    return (str == reversed) ? true : false;
}