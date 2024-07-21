import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "Vishal",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
      <div class="relative h-[400px] w-[300px] rounded-md">
      <Card username="chaiaurcode" someObjects={myObj} btnText="Click here"/>
      <Card username="hitesh" btnText="Visit here"/>
</div>
    </>
  )
}

export default App
