import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1>

        My git project!

      </h1>
    </>
  )
}

export default App
