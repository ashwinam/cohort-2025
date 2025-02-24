import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>counter {count}</button>
}

export default App;