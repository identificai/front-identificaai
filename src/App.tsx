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
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import FormularioServicos from './components/servicos/formularioServicos/FormularioServicos';
import ListaServicos from './components/servicos/listaServicos/ListaServicos';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import DeletarServicos from './components/servicos/deletarServicos/DeletarServicos';
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
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/servicos" element={<ListaServicos />} />
          <Route path="/cadastroServico" element={<FormularioServicos />} />
          <Route path="/editarServicos/:id" element={<FormularioServicos />} />
          <Route path="/deletarServicos/:id" element={<DeletarServicos />} />

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
