"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("palindrome checker", () => {
    it('knows that Momx is not a palindrome', () => {
        expect((0, index_1.checkPalindrome)('Momx')).toBe(false);
    });
    it.each([
        ["mom", true],
        ["Mom", true],
        ["MoM", true],
        ['xMomx', true]
    ])("knows that %p is a palindrome", (word, status) => {
        expect((0, index_1.checkPalindrome)(word)).toBe(status);
    });
    it.each([
        ['Was It A Rat I Saw', true],
        ['Never Odd or Even', true]
    ])("knows that %p is a palindrome", (sentence, status) => {
        expect((0, index_1.checkPalindrome)(sentence)).toBe(status);
    });
    it.each([
        ['1Never Odd of Even1', false],
        ['Never Odd or Even1', false]
    ])("knows that %p is not a palindrome", (sentence, status) => {
        expect((0, index_1.checkPalindrome)(sentence)).toBe(status);
    });
});
