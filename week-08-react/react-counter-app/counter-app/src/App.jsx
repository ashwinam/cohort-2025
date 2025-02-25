import { useState } from 'react';

// function App(){
//   const [count, setCount] = useState(0);
//   return <button onClick={() => setCount(count + 1)}>counter {count}</button>
// }

// Lets Create using button components and props

function App(){
  const [count, setCount] = useState(0);

  return <div>
    <Button count={count} setCount={setCount}/>
  </div>
}

function Button(props){
  function onClickHandler(){
    props.setCount(props.count + 1)
  }
  return <button onClick={onClickHandler}>counter {props.count}</button>
}

export default App;