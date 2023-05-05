import { reverseAString } from './index';

describe('palindrome checker', () => {
    it('reverses a string', () => {
        expect(reverseAString('bill')).toBe('llib');
    });
})