import { createContext, useContext, useState } from "react"
// Context Going to be in global 

const BulbContext = createContext();

function App(){
  return (
    <Light />
  )
}

function Light(){
  const [bulbState, setBulbState] = useState(true);

  return (
    <>
    <BulbContext.Provider value={{bulbState, setBulbState}}>
    <LightBulb />
    <LightSwitch />
    </ BulbContext.Provider>
    </>
  )
}

function LightBulb(){

  const {bulbState} = useContext(BulbContext);

  return (
    <>
      {bulbState ? 'bulbOn': 'bulbOff'}

    </>
  )
}

function LightSwitch(){
  const {setBulbState} = useContext(BulbContext);

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