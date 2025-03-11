import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <br />
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </>
  )
}


export default App