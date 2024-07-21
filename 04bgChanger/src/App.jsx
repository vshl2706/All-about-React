import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
     <div className="w-full h-screen duration-500 "
      style = {{backgroundColor: color}}> 
     </div>
     
     <div className = "fixed flex flex-wrap justify-center bottom-12 isnet-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button /*onclick ko poora function chaiye that's why we are using callback function*/
       onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>

        <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>green</button>
       
        <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
      </div>
     </div>
    </>
  )
}

export default App
