import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // useState(true)
  // useState('')
  // useState('vishal')
  // useState({})

  // 1st variable, second variable is a function which is responsible to upadate this variable
  // The below is used to show values at different position simulatneously
  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    counter = counter + 1
    console.log("clicked", counter);
    // setCounter(counter + 1)
    if(counter>19){
      setCounter(20)
      counter = 20
    }
    else{
      setCounter(counter)
    }
  }

  const removeValue = () => {
    counter = counter - 1
    console.log("clicked", counter);
    if(counter<1){
      setCounter(0)
      counter = 0
    }
    else{
      setCounter(counter)
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
