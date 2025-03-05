import { useState } from "react"

function App(){
  return (
    <Light />
  )
}

function Light(){
  const [bulbState, setBulbState] = useState(true);

  return (
    <>
    <LightBulb bulbState={bulbState} />
    <LightSwitch setBulbState={setBulbState} />
    </>
  )
}

function LightBulb({bulbState}){

  return (
    <>
      {bulbState ? 'bulbOn': 'bulbOff'}
    </>
  )
}

function LightSwitch({setBulbState}){

  function toggleBulb(){
    setBulbState(bulbState => !bulbState);
  }

  return (
    <div>
      <button onClick={toggleBulb}>ToggleBulb</button>
    </div>
  )
}

export default App