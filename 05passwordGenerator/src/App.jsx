import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")    

  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"   /* String str ke andar vo cheezein aayengi jisse hame password generate karna hai */
    if (numberAllowed) str += "0123456789"
    if (numberAllowed) str += "!@#$%^&*()"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass) /* This is giving pass to useState setPassword */
    
  }, [length, numberAllowed, charAllowed, setPassword])
  
  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()    /* use to highlight when copy */
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-4 px-4 my-8 text-orange-400 bg-gray-800 text-center'>
        <h1 className='text-white my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type = "text"
            value = {password}
            className = 'outline-none w-full py-1 px-3'
            placeholder = "Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard} className='outline-none bg-blue-600 text-yellow-300 px-3 py-3'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type = "range"
            min = {6}
            max = {100}
            value = {length}
            className='cursor-pointer' 
            /* Onchange ham directly nahi de sakte kyuki hame saath me ek event bhi pass karna hai, vo event jo ham pass karenge vo fir call kar sakta hai setLength property ko. setLength ke andar hame value deni hai "e.target.value*/
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);  /* prev value jo bhi hai usko reverse kardo */
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div>
              <input
                type = "checkbox"
                defaultChecked = {charAllowed}
                id = "characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

/* Here we will place an API that will automatically generate a password by default

  useCallback(fn, dependencies) ==> useCallback is a React Hook that lets you cache a function definition between re-renders
  ** dependecies me agar kuch bhi change ho rha ha to yaha usko optimise karo
  syntax --
  const name = useCallback(() => {
    })[fn, dependencies]
  
  dependency ==> if clicked then function dobara se run hona chaiye

  */

/* useEffect is a React Hook that lets you synchronize a component with an external system 
Syntax --
useEffect(setup, dependencies)
Not need a variable to store
** dependencies me kuch bhi ched-chaad ho toh dobara se run kardo unko

useCallback ==> optimisation
useEffect ==> again run

useEffect is used to run the useCallback
*/

/*
useRef tab use kra jaata hai jab hame reference pass krna ho
*/