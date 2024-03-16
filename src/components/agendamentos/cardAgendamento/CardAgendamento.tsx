import React from 'react';
import { Link } from 'react-router-dom';
import Agendamento from '../../../models/Agendamento';

interface CardAgendamentosProps {
  agendamento: Agendamento; 
  

}

function CardAgendamentos({ agendamento}: CardAgendamentosProps) { 
  return (
    <div className="container grid grid-cols-2 text-white mt-40">
      <div className='relative flex w-96 flex-col rounded-xl bg-white bg-opacity-50 transition duration-300 bg-clip-border text-gray-700 shadow-md mt-[-75px]'>
        <div>
          <p className="block text-lg font-bold text-center uppercase leading-relaxed text-blue-gray-900 antialiased">
            Nome do requerente: {agendamento.nome}
          </p>
            <>
              <p className="block text-lg font-bold text-center uppercase leading-relaxed text-blue-gray-900 antialiased courier prime">
                Serviço contratado: {agendamento.servico?.nome}
              </p>
              <p className="block text-lg font-bold text-center uppercase leading-relaxed text-blue-gray-900 antialiased courier prime">
                R$: {agendamento.servico?.preco}
              </p>
              <p>
                <span className="font-bold">Descrição do Serviço: {agendamento.servico?.descricao}</span>
              </p>
            </>
          <p>
            <span className="font-bold">Email do requerente:</span>
            {agendamento.usuario?.usuario}
          </p>

          <div className="pb-12"></div>
          <div className="absolute bottom-0 w-full flex items-end justify-around pr-8">
            <Link to={`/editarAgendamento/${agendamento.id}`} className='w-5/12 text-white bg-green-400 hover:bg-green-800 flex items-center justify-center py-2 rounded-xl'>
              <button>Editar</button>
            </Link>
            <Link to={`/deletarAgendamento/${agendamento.id}`} className='text-white bg-red-400 hover:bg-red-700 w-5/12 flex items-center justify-center py-2 rounded-xl'>
              <button>Deletar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAgendamentos;
