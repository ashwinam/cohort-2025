import { useRef, useState, createContext } from "react";
import "./App.css";
import DateVerificationComponent from "./components/DateVerification";

export const myContext = createContext(null);

function App() {
  const [isDisabled, setDisability] = useState(true);
  const dateInputRef = useRef(null);

  return (
    <>
    <div className="bg-[#0c2c58] h-screen flex flex-col items-center justify-center">
    <myContext.Provider value={{dateInputRef, isDisabled, setDisability}}>
      <DateVerificationComponent />
      </myContext.Provider>
      </div>
    </>
  );
}

export default App;
