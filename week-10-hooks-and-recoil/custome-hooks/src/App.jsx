import { useState } from 'react';
import './App.css'

// Create a custom-hook
/*
Custom hook function take a hook internally, it need to have use... in its name and return the required thing from function

*/

function useCounter(){
  const [count, setCount] = useState(0);

  function countIncrease(){
    setCount(count + 1);
  }

  return {count, countIncrease}

}

function App() {

  const { count, countIncrease } = useCounter();

  return (
    <>
      {count}
      <br />
      <button onClick={countIncrease}>Increase</button>
    </>
  )
}


export default App