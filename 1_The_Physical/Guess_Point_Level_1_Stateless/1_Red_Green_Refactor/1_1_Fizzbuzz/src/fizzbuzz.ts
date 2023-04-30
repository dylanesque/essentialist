export function fizzbuzz(size: number): string {
  if (size <= 0) {
    return 'Please enter a positive number'
  } else {
    return size.toString();
  }
}

export function isMultipleOfThree(num: number) {
    return (num % 3 == 0) ? true : false;
}
