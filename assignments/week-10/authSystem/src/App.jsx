import "./Auth.css";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Login from "./components/Login";
import { createContext, useState } from "react";

export const UsernameContext = createContext();

function App() {
  const [username, setUsername] = useState("ashwin");

  return (
    <>
    <UsernameContext.Provider value={{username, setUsername}} >
      <AppBar  />
      {username ? <Home /> : <Login />}
    </ UsernameContext.Provider>
    </>
  );
}

export default App;
