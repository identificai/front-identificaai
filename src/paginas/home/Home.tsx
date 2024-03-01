import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaServicos from '../../components/servicos/listaServicos/ListaServicos';
import ModalServicos from '../../components/servicos/modalServicos/ModalServicos';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <>
        <div className='back-home'>
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Identifica Aí!</h2>
              <p className='text-xl'>Programa destinado a documentação de todes!</p>
  
              <div className="flex justify-around gap-4">
              <ModalServicos />
              <Link to="/categorias" className='rounded bg-white text-blue-800 py-2 px-4'>Ver categorias</Link>
              <Link to="/servicos" className='rounded bg-white text-blue-800 py-2 px-4'>Serviços</Link>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaServicos />
      </>
    );
}

export default Home;
