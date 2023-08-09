"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPalindrome = exports.reverseAString = void 0;
function reverseAString(str) {
    return str.split("").reverse().join("");
}
exports.reverseAString = reverseAString;
function checkPalindrome(str) {
    let normalizedStr = str.toLowerCase();
    let reversed = reverseAString(normalizedStr);
    str = normalizedStr.replace(/\s+/g, '');
    reversed = reversed.replace(/\s+/g, '');
    return (str === reversed);
}
exports.checkPalindrome = checkPalindrome;
