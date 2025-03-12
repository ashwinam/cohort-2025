import { useEffect, useState } from "react";
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

function App() {
  const [postId, setPostId] = useState(1);

  const [posts, isLoading ] = useFetch(postId);

  return (
    <>
      <button onClick={() => setPostId(1)}>1</button>
      <button onClick={() => setPostId(2)}>2</button>
      <button onClick={() => setPostId(3)}>3</button>
      <br />
      <p>{isLoading ? 'Loading ...' : JSON.stringify(posts)}</p>
    </>
  );
}

export default App;
