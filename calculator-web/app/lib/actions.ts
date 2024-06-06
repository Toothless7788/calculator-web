import { Operation } from "./definitions";

let m = 0;    // First number
let n = 0;    // Second number
let isFirstNumber = true;    // Whether we are changing the value of the first number
let operation = Operation.ADD;
let canInputSecondNumber = false;    // Whether we can start inputting the value of the second number
let isEquationValid = false;    // Whether we can calculate the values of m and n
const MAX_VLAUE = 1000000000;    //TODO to be changed
let toBeReset = false;    // Set true after calculate() is invoked


export function inputNumber(value: number): void {
    if(toBeReset) {
        reset();
        toBeReset = false;
    }

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
}

export function inputOperation(o: Operation): void {
    // alert(`Operation: ${operation}`);
    if(isFirstNumber && canInputSecondNumber) {
        isFirstNumber = false;
        operation = o;
    }
}

export function calculate(): void {
    if(!isEquationValid) {
        return;
    } else {
        switch(operation) {
            case Operation.ADD: 
                m = m + n;
                break;
            case Operation.SUBTRACT:
                m = m - n;
                break;
            case Operation.MULTIPLY:
                m = m * n;
                break;
            case Operation.DIVIDE:
                m = m / n;
                break;
            default:
                console.log(`Undefined operation`);
                break;
        }
        isFirstNumber = true;
        toBeReset = true;
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

export function getDisplayNumber(): string {
    if(isFirstNumber) {
        return m.toString();
    } else {
        return n.toString();
    }
}