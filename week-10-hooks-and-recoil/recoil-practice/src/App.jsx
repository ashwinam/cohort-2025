import "./App.css";
import { createContext, useContext, useState } from "react";
import { atom, useAtom } from "jotai";
import { Counter } from './Counter'

export const CounterAtom = atom(0);

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
