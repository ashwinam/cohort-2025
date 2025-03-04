import { useRef } from "react"

export default function App(){

  const inputRef = useRef(null);

  function submitHandler(){
    inputRef.current.focus()
  }
  return (
    <>

      <input ref={inputRef}  type="text" />
      <input type="text" />
      <button onClick={submitHandler}>Submit</button>
    </>
  )
}