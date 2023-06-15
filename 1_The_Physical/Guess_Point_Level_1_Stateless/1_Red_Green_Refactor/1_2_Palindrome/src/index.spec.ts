import { checkPalindrome, reverseAString } from "./index";

describe("palindrome checker", () => {
  it("reverses a string", () => {
    expect(reverseAString("bill")).toBe("llib");
  });

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

  it("reverses a multi-word string", () => {
    expect(reverseAString("ball hitter")).toBe("rettih llab");
  });

  it("returns false for multi-word non-palindrome", () => {
    expect(checkPalindrome("ball hitter")).toBe(false);
  });

  it("returns true for multi-word palindrome", () => {
    expect(checkPalindrome("never odd or even")).toBe(true);
  });
});
