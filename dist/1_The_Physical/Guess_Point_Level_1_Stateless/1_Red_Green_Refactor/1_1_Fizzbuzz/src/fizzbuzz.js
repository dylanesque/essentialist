"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMultipleOfThreeAndFive = exports.isMultipleOfFive = exports.isMultipleOfThree = exports.fizzbuzz = void 0;
function fizzbuzz(num) {
    if (num <= 0) {
        return 'Please enter a positive number';
    }
    else if (num >= 101) {
        return 'Please enter a number lower than or equal to 100';
    }
    else {
        if (isMultipleOfThreeAndFive(num)) {
            return "FizzBuzz";
        }
        else if (isMultipleOfThree(num)) {
            return "Fizz";
        }
        else if (isMultipleOfFive(num)) {
            return "Buzz";
        }
        return num.toString();
    }
}
exports.fizzbuzz = fizzbuzz;
function isMultipleOfThree(num) {
    return (num % 3 == 0) ? true : false;
}
exports.isMultipleOfThree = isMultipleOfThree;
function isMultipleOfFive(num) {
    return (num % 5 == 0) ? true : false;
}
exports.isMultipleOfFive = isMultipleOfFive;
function isMultipleOfThreeAndFive(num) {
    return (isMultipleOfThree(num) && isMultipleOfFive(num)) ? true : false;
}
exports.isMultipleOfThreeAndFive = isMultipleOfThreeAndFive;
