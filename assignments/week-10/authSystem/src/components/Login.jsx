import { useContext, useRef } from "react";
import {UsernameContext} from '../App.jsx';

const Login = () => {
  const {setUsername} = useContext(UsernameContext);

  const ref = useRef(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <p>Enter the Username details: </p>
      <input
        type="text"
        placeholder="Enter Your Username"
        style={{ width: 300, padding: "5px 15px" }}
        ref={ref}
      />
      <button
        style={{
          padding: "7px 17px",
          border: "none",
          backgroundColor: "blueviolet",
          color: "white",
          borderRadius: 4,
          fontSize: 15,
          fontWeight: "bold",
          width: 100,
          cursor: "pointer",
        }}
        onClick={() => setUsername(ref.current.value)}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
