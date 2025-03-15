import { CounterAtom } from "./App";
import { useAtom } from "jotai";

function IncreaseCount(){
    const [_, setCount] = useAtom(CounterAtom);
  
    return (
      <>
        <button style={{marginRight:10}} onClick={() => setCount(c => c + 1)}>Increase Count</button>
      </>
    )
  }
  
function Count(){
    const [count] = useAtom(CounterAtom);
    return (
      <h1 style={{display: 'block', marginBottom: 10}}>Count: {count}</h1>
    )
  }
  
function DecreaseCount(){
    const [_,setCount] = useAtom(CounterAtom);
    return (
      <>
        <button onClick={() => setCount(c => c - 1)}>Decrease Count</button>
      </>
    )
  }
  
export function Counter(){
    return (
      <>
          <Count />
          <IncreaseCount/>
          <DecreaseCount/>
      </>
    )
  }