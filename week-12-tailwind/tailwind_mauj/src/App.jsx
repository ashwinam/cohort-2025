import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between'>
        <div className='bg-red-400 w-100 text-white font-bold'>Hi There!</div>
        <div className='bg-green-500 w-100 text-white font-bold'>Hi There!</div>
        <div className='bg-yellow-700 w-100 text-white font-bold'>Hi There!</div>
      </div>
    </>
  )
}

export default App
