import { useState } from "react";

function App() {
  const todoState = useState(
    [
      {
        id: 1,
        title: 'Go to Gym',
        done: true
      }
    ]
  )

  let todos = todoState[0];
  let setTodos = todoState[1]

  console.log(todos);
  

  function submitTodo(){
    setTodos([...todos, {
      id: todos.length + 1,
      title: document.getElementById('title').value, done:false
    }])
  }


  return <div>
    <input type="text" placeholder="Enter Title" id="title"/>
    <button type="submit" onClick={submitTodo}>Submit</button>
    {todos.map((x) => (
      <h1 key={x.id}>{x.title}</h1>
    ))}

  </div>
}

export default App;