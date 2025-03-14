import './App.css'
import { createContext, useContext, useState } from 'react'

const CountContext = createContext();

function CountContextProvider({children}){
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>

}

function IncreaseCount(){
  const {count, setCount} = useContext(CountContext);

  return (
    <>
      <button style={{marginRight:10}} onClick={() => setCount(c => c + 1)}>Increase Count</button>
    </>
  )
}

function Count(){
  const {count, setCount} = useContext(CountContext);
  return (
    <div style={{display: 'block', marginBottom: 10}}>Count: {count}</div>
  )
}

function DecreaseCount(){
  const {count, setCount} = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(c => c - 1)}>Decrease Count</button>
    </>
  )
}

function Counter(){
  return (
    <>
      <CountContextProvider>
        <Count />
        <IncreaseCount/>
        <DecreaseCount/>
      </CountContextProvider>
    </>
  )
}

function App() {
  return (
    <>
     <Counter />
    </>
  )
}

export default App;