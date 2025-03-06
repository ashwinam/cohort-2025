
const Login = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", rowGap: 10, alignItems: "center", justifyContent: "center"}}>
      <input type="text" placeholder="Enter Your Username" style={{width: 300, padding: "5px 15px"}} />
      <button style={{padding: "7px 17px", border: "none", backgroundColor: "blueviolet", color: "white", borderRadius: 4, fontSize: 15, fontWeight: "bold", width: 100}}>Login</button>
    </div>
  )
}

export default Login