import React from 'react'
import { Link } from 'react-router-dom'
import Servicos from '../../../models/Servico'
import defaultImage from '../../../assets/books.jpg'

interface CardProdutoProps {
  servicos: Servicos
}

function CardProduto({servicos}: CardProdutoProps) {
  return (
    <div className="container grid grid-cols-2 text-white mt-40">
    <div className='relative flex w-96 flex-col rounded-xl bg-white bg-opacity-50 transition duration-300 hover:text-teal-400 bg-clip-border text-gray-700 shadow-md mt-[-75px]'>
      <div>
        <img src={servicos.foto || defaultImage} className='rounded-xl'/>
        <div className='content-between'>
        <div className='p-4 '>
        <div className="mb-2 flex items-center justify-between p-4">
          <p className="block text-lg font-bold text-center uppercase leading-relaxed text-blue-gray-900 antialiased">
            {servicos?.nome}
          </p>
          <p className="block text-lg font-bold text-center uppercase leading-relaxed text-blue-gray-900 antialiased courier prime">
          R$ {servicos.preco}
          </p>
        </div>
          <p>
            <span className="font-bold">Descrição do Serviço:</span>
             {servicos.descricao}
          </p>
          <p>
           <span className="font-bold">Categoria:</span>
           {servicos.categoria?.tipo}
          </p>
          <p>
           <span className="font-bold">Entre em contato:</span>
           {servicos.usuario?.nome}
          </p>
          <p>
           <span className="font-bold">Email p/ contato:</span> {servicos.usuario?.usuario}
          </p>
      </div>
      <div className="pb-12"></div>
      <div className="absolute bottom-0 w-full flex items-end justify-around">
      <Link to={`/editarServicos/${servicos.id}`} className='w-5/12 text-white bg-green-400 hover:bg-green-800 flex items-center justify-center py-2 rounded-xl'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarServicos/${servicos.id}`} className='text-white bg-red-400 hover:bg-red-700 w-5/12 flex items-center justify-center py-2 rounded-xl'>
          <button>Deletar</button>
        </Link>
        </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default CardProduto