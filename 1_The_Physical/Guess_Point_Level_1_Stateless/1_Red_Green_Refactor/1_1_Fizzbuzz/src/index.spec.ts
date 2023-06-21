import { fizzbuzz, isMultipleOfThree, isMultipleOfThreeAndFive, isMultipleOfFive } from './fizzbuzz';

describe("fizzbuzz", () => {
    it('takes a positive number between 1 and 100', () => {
        const num = 3;
        expect(fizzbuzz(num)).toEqual(num.toString());
    });

    it('does not work when called with a negative number', () => {
        const num = -12;
        expect(fizzbuzz(num)).toEqual('Please enter a positive number')
    });

    it('does not work when called with a number greater than 100', () => {
        const num = 102;
        expect(fizzbuzz(num)).toEqual('Please enter a positive number')
    });


    it("returns true when given a multiple of 3", () => {
        expect(isMultipleOfThree(3)).toEqual(true);
    });

    it("returns false when given a non-multiple of 3", () => {
        expect(isMultipleOfThree(4)).toEqual(false);
    });

    it("returns true when given a multiple of 5", () => {
        expect(isMultipleOfFive(5)).toEqual(true);
    });

    it("returns false when given a non-multiple of 5", () => {
        expect(isMultipleOfFive(4)).toEqual(false);
    });

    it("returns true when given a multiple of both 3 and 5", () => {
        expect(isMultipleOfThreeAndFive(15)).toEqual(true);
    });

    it("returns false when given a non-multiple of both 3 and 5", () => {
        expect(isMultipleOfThreeAndFive(12)).toEqual(false);
    });

    

});


