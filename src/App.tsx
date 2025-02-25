import { useState } from 'react'
import ulLogo from './assets/logo.PNG'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={ulLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>University Of Liberia</h1>
    </>
  )
}

export default App
