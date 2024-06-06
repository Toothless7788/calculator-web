export enum Operation {
    ADD = 10, 
    SUBTRACT = 11, 
    MULTIPLY = 12, 
    DIVIDE = 13, 
    EQUAL = 14, 
    RESET = 15
};

export type EventHandler = (value: number) => void | ((operation: Operation) => void);
