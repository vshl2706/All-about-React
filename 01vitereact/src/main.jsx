import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',    /*Vaha par particular syntax defined hai uske according value pass nahi hi rhi */ 
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

// React syntax to create
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser,
  anotherElement

  // We can not use if else inside function
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<App/>
  // anotherElement
  reactElement
  
)
