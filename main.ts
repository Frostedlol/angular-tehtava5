import { ArrayCalculator } from './calculator';

const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const calculator = new ArrayCalculator(arrayNumbers);
const result = calculator.calcArray();
console.log(`Sum: ${result.sum} & count: ${result.count}`); // Should print: Sum: 22 & count: 5