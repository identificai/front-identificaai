import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contato from './paginas/contato/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Contato></Contato>
    </>
  )
}

export default App
