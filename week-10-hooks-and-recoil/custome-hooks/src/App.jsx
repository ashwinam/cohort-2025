import { useEffect, useRef, useState } from "react";
import "./App.css";

// Create a custom-hook
/*
Custom hook function take a hook internally, it need to have use... in its name and return the required thing from function

*/

function useCounter() {
  const [count, setCount] = useState(0);

  function countIncrease() {
    setCount(count + 1);
  }

  return { count, countIncrease };
}



function useFetch(postId) {
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    let json = await response.json();
    setCurrentData(json);
  };

  useEffect(() => {
    setLoading(true)
    data();
    setLoading(false)
  }, [postId]);

  return [currentData, loading];
}

function usePrev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function App() {
  const [count, setCount] = useState(0);

  const prevValue = usePrev(count);

  function increaseCount() {
    setCount(c => c + 1);
  }

  function descreseCount() {
    setCount(c => c - 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <p>Previous: {prevValue}</p>
      <button onClick={increaseCount} style={{marginRight: 10}}>Increase</button>
      <button onClick={descreseCount}>Decrease</button>
    </>
  );
}

export default App;
