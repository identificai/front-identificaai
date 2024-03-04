import React from 'react';
import homeLogo from '../../assets/home.gif';
import './Home.css';

function Home() {
  return (
    <>
      <div className='back-home'>
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            {/* Linha com "Identifica" */}
            <h2 className='text-6xl font-light italic dark-text text-center'>
              Jdentifica
            </h2>
            {/* Linha com "Aí" embaixo */}
            <h2 className='text-4xl font-light italic dark-text text-center'>
              AÍ 🌱
            </h2>
            {/* Adicione um espaço extra se desejar */}
            <p className='text-xl'></p>

            {/* Botões adicionados aqui */}
            <a
              href="#"
              className="font-montserrat text-blue-500 font-semibold text-lg py-3 px-8 rounded-full shadow-lg bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white mb-4"
            >
              Doe
            </a>
            <a
              href="#"
              className="font-montserrat text-blue-500 font-semibold text-lg py-3 px-8 rounded-full shadow-lg bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Participe
            </a>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src={homeLogo} alt="" className='w-2/3' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
