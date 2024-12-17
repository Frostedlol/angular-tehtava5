import { ArrayValues } from './allvalues';

export class ArrayCalculator {
    private numbers: number[];

    constructor(numbers: number[]) {
        this.numbers = numbers;
    }

    public calcArray(): ArrayValues {
        const sum = this.numbers.reduce((acc, val) => acc + val, 0);
        const count = this.numbers.length;

        return new ArrayValues(sum, count);
    }
}