import { fizzbuzz, isMultipleOfThree } from './fizzbuzz';

describe("fizzbuzz", () => {
    it('takes a positive number', () => {
        const num = 3;
        expect(fizzbuzz(num)).toEqual(num.toString());
    });

    it('throws when called with a negative number', () => {
        const num = -2;
        expect(fizzbuzz(num)).toEqual('Please enter a positive number')
    });

    it("returns true when given a multiple of 3", () => {
        expect(isMultipleOfThree(3)).toEqual(true);
    });

    it("returns false when given a multiple of 3", () => {
        expect(isMultipleOfThree(4)).toEqual(false);
    });

});


