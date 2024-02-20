import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Footer from './components/footer/Footer'
import Contato from './paginas/contato/Contato'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Footer></Footer>

      
      <Contato></Contato>
    </>
  )
}

export default App
