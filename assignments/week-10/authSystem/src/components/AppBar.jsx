const AppBar = () => {
  return (
    <div style={{backgroundColor: "skyblue", padding:20, color:"white", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <h1>Auth System demo</h1>
      <div style={{display: "flex", alignItems: "center", columnGap: 10, fontWeight: "bold", fontSize: 20}}>
        <p>Welcome, Raman!</p>
        <button style={{padding: 10}}>Logout</button>
      </div>
    </div>
  )
}

export default AppBar