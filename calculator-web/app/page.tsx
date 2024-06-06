"use client";
import Button from "@/components/button";
import Screen from "@/components/screen";
import { inputNumber, inputOperation } from "./lib/actions";
import { Operation } from "./lib/definitions";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl text-blue-500">Hello World</h1>
      <Button text={0} action={(number: number) => {inputNumber(number)}} />
      <Button text={1} action={(number: number) => {inputNumber(number)}} />
      <Button text={2} action={(number: number) => {inputNumber(number)}} />
      <Button text={3} action={(number: number) => {inputNumber(number)}} />
      <Button text={4} action={(number: number) => {inputNumber(number)}} />
      <Button text={5} action={(number: number) => {inputNumber(number)}} />
      <Button text={6} action={(number: number) => {inputNumber(number)}} />
      <Button text={7} action={(number: number) => {inputNumber(number)}} />
      <Button text={8} action={(number: number) => {inputNumber(number)}} />
      <Button text={9} action={(number: number) => {inputNumber(number)}} />
      <Button text={Operation.ADD} action={(operation: Operation) => {inputOperation(operation)}} />
      <Button text={Operation.SUBTRACT} action={(operation: Operation) => {inputOperation(operation)}} />
      <Button text={Operation.MULTIPLY} action={(operation: Operation) => {inputOperation(operation)}} />
      <Button text={Operation.DIVIDE} action={(operation: Operation) => {inputOperation(operation)}} />
      <Screen text="This is a text"/>
    </div>
  );
}


