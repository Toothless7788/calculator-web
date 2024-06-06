"use client";
import Button from "@/components/button";
import Screen from "@/components/screen";
import { calculate, getDisplayNumber, getFirstNumber, inputNumber, inputOperation, reset } from "./lib/actions";
import { Operation } from "./lib/definitions";
import {useState} from "react";

export default function App() {
  const [answer, setAnswer] = useState("0");

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      {/* (center) justify-center flex is for making the components center */}
      <div className="h-[520px] w-[410px] bg-black items center justify-center flex rounded-lg">
        <div className="bg-slate-600 h-[500px] rounded-xl my-3">
          <Screen text={answer} />
          <div className="grid grid-cols-1 gap-6">
            {/* <h1 className="text-3xl text-blue-500">Hello World</h1> */}
            <div className="space-x-5 space-y-3">
              <Button text={7} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={8} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={9} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={Operation.RESET} action={(dummy: Operation) => {reset(); setAnswer(getDisplayNumber())}} />
            </div>
            <div className="space-x-5">
              <Button text={4} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={5} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={6} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={Operation.ADD} action={(operation: Operation) => {inputOperation(operation); setAnswer(getDisplayNumber())}} />
            </div>
            <div className="space-x-5">
              <Button text={1} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={2} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={3} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={Operation.SUBTRACT} action={(operation: Operation) => {inputOperation(operation); setAnswer(getDisplayNumber())}} />
            </div>
            <div className="space-x-5">
              <Button text={0} action={(number: number) => {inputNumber(number); setAnswer(getDisplayNumber())}} />
              <Button text={Operation.MULTIPLY} action={(operation: Operation) => {inputOperation(operation); setAnswer(getDisplayNumber())}} />
              <Button text={Operation.DIVIDE} action={(operation: Operation) => {inputOperation(operation); setAnswer(getDisplayNumber())}} />
              <Button text={Operation.EQUAL} action={(dummy: Operation) => {calculate(); setAnswer(getDisplayNumber())}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


