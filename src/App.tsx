import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Contato from './paginas/contato/Contato'
import Sobre from './paginas/sobre/Sobre'
import Home from './paginas/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
