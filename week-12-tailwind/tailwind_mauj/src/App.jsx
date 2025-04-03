import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{textAlign: 'center', fontSize: 20, fontWeight: 900}}>Hello World!</h1>
    </>
  )
}

export default App
