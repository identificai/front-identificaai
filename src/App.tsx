import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Contato from './paginas/contato/Contato'
import Sobre from './paginas/sobre/Sobre'
import Home from './paginas/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './paginas/cadastro/Cadastro'
import Login from './paginas/login/Login'
import { AuthProvider } from './contexts/AuthContext'
function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Navbar></Navbar>
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
