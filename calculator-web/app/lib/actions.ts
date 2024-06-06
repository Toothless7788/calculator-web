import { Operation } from "./definitions";

let m = 0;    // First number
let n = 0;    // Second number
let isFirstNumber = true;    // Whether we are changing the value of the first number
let operation = Operation.ADD;
let canInputSecondNumber = false;    // Whether we can start inputting the value of the second number
let isEquationValid = false;    // Whether we can calculate the values of m and n
const MAX_VLAUE = 1000000000;    //TODO to be changed


export function inputNumber(value: number): void {
    if(isFirstNumber) {
        if(m < MAX_VLAUE) {    //TODO Ensure the value of m does not exceed a maximum value
            m = m * 10 + value;
            canInputSecondNumber = true;
        }
    } else {
        if(n < MAX_VLAUE) {    //TODO Ensure the value of m does not exceed a maximum value
            n = n * 10 + value;
            isEquationValid = true;
        }
    }
    alert(`New m: ${m}; New n: ${n}`);
}

export function inputOperation(operation: Operation): void {
    // alert(`Operation: ${operation}`);
    if(isFirstNumber && canInputSecondNumber) {
        isFirstNumber = false;
    }
}

export function calculate(): number | null {
    if(!isEquationValid) {
        return null;
    } else {
        switch(operation) {
            case Operation.ADD: 
                return m + n;
            case Operation.SUBTRACT:
                return m - n;
            case Operation.MULTIPLY:
                return m * n;
            case Operation.DIVIDE:
                return m / n;
            default:
                return null;
        }
    }
}

export function reset(): void {
    m = 0;
    n = 0;
    isFirstNumber = true;
    isEquationValid = false;
    canInputSecondNumber = false;
}

export function getFirstNumber(): number {
    return m;
}

export function getSecondNumber(): number {
    return n;
}

export function updateDisplay(): void {
    //TODO Update function. Perhaps it should not be placed in actions.tsx
}

