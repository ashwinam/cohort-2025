import { useEffect, useState } from 'react';
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

  const [currentData, setCurrentData] = useState([]);

  const data = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    let json = await response.json()
    setCurrentData(json);
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <>
      <br />
      <p>{ JSON.stringify(currentData) }</p>
    </>
  )
}


export default App