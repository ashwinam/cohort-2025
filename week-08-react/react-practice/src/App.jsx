function App(){

  const items = [
    {
      id: 1, item: "Item 1"
    },
    {
      id: 2, item: "Item 2"
    },
    {
      id: 3, item: "Item 3"
    }
  ]
  return (
    <ul>
      {items.map(x => <li key={x.id}>{x.item}</li>)}
    </ul>
  )
}

export default App