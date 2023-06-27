export function fizzbuzz(num: number): string {
  if (num <= 0) {
    return 'Please enter a positive number'
  } else if (num >= 101) {
    return 'Please enter a number lower than or equal to 100'
  } else {
        if (isMultipleOfThreeAndFive(num)) {
            console.log("FizzBuzz")
        } else if (isMultipleOfThree(num)) {
            return "Fizz";
        } else if (isMultipleOfFive(num)) {
            console.log("Buzz");
    }
        return num.toString();
  }
}

export function isMultipleOfThree(num: number) {
    return (num % 3 == 0) ? true : false;
}

export function isMultipleOfFive(num: number) {
    return (num % 5 == 0) ? true : false;
}

export function isMultipleOfThreeAndFive(num: number) {
    return (isMultipleOfThree(num) && isMultipleOfFive(num)) ? true : false;
}
