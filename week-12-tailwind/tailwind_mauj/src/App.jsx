import { useRef, useState, createContext } from "react";
import "./App.css";
import DateVerificationComponent from "./components/DateVerification";
import EmailComponent from "./components/EmailComponent"

export const myContext = createContext(null);

function App() {
  const [isDisabled, setDisability] = useState(true);
  const [currentState, setCurrentState] = useState("ageVerification");
  const dateInputRef = useRef(null);
  const emailInputRef = useRef(null);

  return (
    <>
      <div className="bg-[#0c2c58] h-screen flex flex-col items-center justify-center">
        <myContext.Provider value={{ dateInputRef, isDisabled, setDisability, setCurrentState, emailInputRef }}>
          {currentState === "ageVerification" && <DateVerificationComponent />}
          {currentState === 'emailVerification' && <EmailComponent />}
        </myContext.Provider>
      </div>
    </>
  );
}

export default App;
