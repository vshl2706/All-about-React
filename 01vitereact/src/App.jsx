// function App() {
//   return (
//     <h1>Chai aur react with vite</h1> 
//   )
// }

// export default App
  

import Chai from "./chai"
function App() {
  const username = "chai aur code"

  return (
    <>    // Return fragment
    <Chai/>   // We can export only one element, thats why we have commented/remove the previous element
    <h1>chai aur react {username}</h1>
    <p>test para</p>
    </>
  )
}

export default App
