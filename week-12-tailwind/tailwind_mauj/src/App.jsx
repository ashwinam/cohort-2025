import { useRef, useState, createContext } from "react";
import "./App.css";
import DateVerificationComponent from "./components/DateVerification";

export const myContext = createContext(null);

function App() {
  const [isDisabled, setDisability] = useState(true);
  const dateInputRef = useRef(null);

  return (
    <>
    <myContext.Provider value={{dateInputRef, isDisabled, setDisability}}>
      <DateVerificationComponent />
      </myContext.Provider>
    </>
  );
}

export default App;
