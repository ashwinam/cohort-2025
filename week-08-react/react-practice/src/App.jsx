function App(){
  return (
    <div style={{display: "flex", flexDirection: "column", rowGap: 10}}>
      <Card>
        <h2>This a One Card</h2>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti ut praesentium odio labore beatae obcaecati porro suscipit rem aliquam distinctio sequi inventore error accusamus minima, magnam sit laudantium officiis!</p>
      </Card>

      <Card>
      <h2>This a Second Card</h2>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti ut praesentium odio labore beatae obcaecati porro suscipit rem aliquam distinctio sequi inventore error accusamus minima, magnam sit laudantium officiis!</p>

      </Card>
      </div>
  )
}

function Card({children}){
  return <div style={{padding: 30, borderRadius: 20, border: "1px solid black"}}>
    {children}
  </div>
}

export default App;