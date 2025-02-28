import { useEffect, useState } from "react"


function App() {


  return (
    <div>
    {/* <div><Notification /></div> */}

    <Counter  />
    
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

function Counter(){
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count + 1);
  }

  useEffect(
    ()=>{
      const interval = setInterval(increaseCount, 1000)
    
    // return () =>clearInterval(interval);
  }
  );
  
  
  return <div>
    <div>{count}</div>
  </div>
}

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setSeconds(prev => prev + 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};

export default App
