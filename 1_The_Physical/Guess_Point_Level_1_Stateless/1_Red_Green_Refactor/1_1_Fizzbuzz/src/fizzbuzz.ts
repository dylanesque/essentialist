export function fizzbuzz(num: number): string {
  if (num <= 0) {
    return 'Please enter a positive number'
  } else if (num >= 101) {
    return 'Please enter a number lower than or equal to 100'
  } else {
    /*
    for (let i = 0; i <= size; i++) {
        if (isMultipleOfThreeAndFive(i)) {
            console.log("FizzBuzz")
        } else if (isMultipleOfThree(i)) {
            console.log("Fizz");
        } else if (isMultipleOfFive(i)) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
        */
    }
    return num.toString();
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
