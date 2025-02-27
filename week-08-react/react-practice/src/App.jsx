import { useState } from "react"

function App() {

  return (
    <div>
    {/* <div><Notification /></div> */}

    <Greeting name={"Ashwin"} />
    <Greeting name={"rohan"} />
    <Greeting name={"Shekhawat"} />
    
    </div>
  )
}

// function Notification(){
// const [notification, setNotification] = useState(true);

//   function toggleMessage(){
//     setNotification(!notification);
//   }

//   return(
//   <div>
//     <button onClick={toggleMessage}>Toggle Message</button>
//   {notification ? <p>message appeared</p>: null}
//   </div>
// )
// }

// Props

function Greeting({name}){
  return <div>Hello, {name}</div>
}

export default App
