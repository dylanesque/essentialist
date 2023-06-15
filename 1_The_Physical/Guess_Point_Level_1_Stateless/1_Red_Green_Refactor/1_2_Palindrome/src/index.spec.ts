import { checkPalindrome, reverseAString } from "./index";

describe("palindrome checker", () => {
    it('knows that Momx is not a palindrome', () => {
    expect(checkPalindrome('Momx')).toBe(false);
  });

  it.each([
    ["mom", true],
    ["Mom", true],
    ["MoM", true],
    ['xMomx', true]
  ])("knows that %p is a palindrome", (word: string, status: boolean) => {
    expect(checkPalindrome(word)).toBe(status);
  });

  it.each([
    ['Was It A Rat I Saw', true],
    ['Never Odd or Even', true]
  ])("knows that %p is a palindrome", (sentence: string, status: boolean) => {
    expect(checkPalindrome(sentence)).toBe(status);
  });

  it.each([
    ['1Never Odd of Even1', false],
    ['Never Odd or Even1', false]
  ])("knows that %p is not a palindrome", (sentence: string, status: boolean) => {
    expect(checkPalindrome(sentence)).toBe(status);
  });
});
