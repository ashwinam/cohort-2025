import { useState } from 'react'
import './App.css'

function App() {
  const [isDisabled, setDisability] = useState(false)

  return (
    <>
      <div className='bg-[#0c2c58] h-screen flex flex-col items-center'>
        <div className='flex mt-20'>
         <p className='mr-2'>💕</p>
          <h1 className='text-xl text-[#3fe3d1]'>Webinar</h1><span className='text-white text-xl'>.gg</span>
        </div>
        <div className='text-white text-2xl my-15'>Verify Your Age</div>
        <div className='text-gray-400 text-sm'>Please confirm your birth year. This data will not be stored.</div>

        <input className="bg-[#18406b] placeholder:text-gray-500 placeholder:text-xs px-3 py-2 mt-5 rounded-md w-70 text-gray-300" type="text" placeholder='Your Birth Year' />

        <button disabled='true' className={`mt-7 w-70 py-2 rounded-md bg-gray-400 text-sm text-white cursor-${isDisabled ? 'not-allowed': 'pointer'}`}>Continue</button>

      </div>
    </>
  )
}

export default App
