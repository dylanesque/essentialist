import { checkPalindrome, reverseAString } from './index';

describe('palindrome checker', () => {
    it('reverses a string', () => {
        expect(reverseAString('bill')).toBe('llib');
    });

    it('returns false if it is not a palindrome', () => {
        expect(checkPalindrome('bill')).toBe(false);
    });

    it('returns true if it is a palindrome', () => {
        expect(checkPalindrome('mom')).toBe(true);
    });

    it('reverses a multi-word string', () => {
        expect(reverseAString('ball hitter')).toBe('rettih llab');
    });

    it('returns false for multi-word non-palindrome', () => {
        expect(checkPalindrome('ball hitter')).toBe(false);
    });

    it('returns true for multi-word palindrome', () => {
        expect(checkPalindrome('never odd or even')).toBe(true);
    });


})

