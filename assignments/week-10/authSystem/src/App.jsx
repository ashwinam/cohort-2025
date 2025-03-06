import AuthSystem from "./components/AuthSystem";
import "./Auth.css";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("ashwin");

  return (
    <>
      <AppBar username={username} setUsername={setUsername} />
      {username ? <Home /> : <Login setUsername={setUsername} />}
    </>
  );
}

export default App;
