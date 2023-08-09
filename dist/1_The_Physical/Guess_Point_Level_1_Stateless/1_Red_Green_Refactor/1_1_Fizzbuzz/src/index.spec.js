"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("./fizzbuzz");
describe("fizzbuzz", () => {
    it("returns the number in string form", () => {
        const num = 2;
        expect((0, fizzbuzz_1.fizzbuzz)(num)).toEqual(num.toString());
    });
    it.each([
        [3, "Fizz"],
        [5, "Buzz"],
        [15, "FizzBuzz"],
        [9, "Fizz"],
        [43, "43"],
        [42, "Fizz"],
        [45, "FizzBuzz"]
    ])("takes a positive number between 1 and 100", (num, val) => {
        expect((0, fizzbuzz_1.fizzbuzz)(num)).toEqual(val);
    });
    it("does not work when called with a negative number", () => {
        const num = -12;
        expect((0, fizzbuzz_1.fizzbuzz)(num)).toEqual("Please enter a positive number");
    });
    it("does not work when called with a number greater than 100", () => {
        const num = 102;
        expect((0, fizzbuzz_1.fizzbuzz)(num)).toEqual("Please enter a number lower than or equal to 100");
    });
    // Commenting out test to prevent TS error
    /*
      it("does not work when called with a string", () => {
        expect(fizzbuzz("Clank")).toEqual(
            "Please enter a number."
          );
      });
      */
    it("returns true when given a multiple of 3", () => {
        expect((0, fizzbuzz_1.isMultipleOfThree)(3)).toEqual(true);
    });
    it("returns false when given a non-multiple of 3", () => {
        expect((0, fizzbuzz_1.isMultipleOfThree)(4)).toEqual(false);
    });
    it("returns true when given a multiple of 5", () => {
        expect((0, fizzbuzz_1.isMultipleOfFive)(5)).toEqual(true);
    });
    it("returns false when given a non-multiple of 5", () => {
        expect((0, fizzbuzz_1.isMultipleOfFive)(4)).toEqual(false);
    });
    it("returns true when given a multiple of both 3 and 5", () => {
        expect((0, fizzbuzz_1.isMultipleOfThreeAndFive)(15)).toEqual(true);
    });
    it("returns false when given a non-multiple of both 3 and 5", () => {
        expect((0, fizzbuzz_1.isMultipleOfThreeAndFive)(12)).toEqual(false);
    });
});
