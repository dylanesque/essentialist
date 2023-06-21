export function reverseAString(str: string) {
    return str.split("").reverse().join("");
}

export function checkPalindrome(str: string) {
    let normalizedStr = str.toLowerCase();
    let reversed = reverseAString(normalizedStr);
    str = normalizedStr.replace(/\s+/g, '');
    reversed = reversed.replace(/\s+/g, '');
    return (str === reversed);
}
