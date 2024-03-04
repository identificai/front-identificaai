import React from 'react'
import { Link } from 'react-router-dom'
import Servicos from '../../../models/Servico'

interface CardProdutoProps {
  servicos: Servicos
}

function CardProduto({servicos}: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <h3 className='text-lg font-bold text-center uppercase '>{servicos?.nome}</h3>
        </div>
        <div className='p-4 '>
          <p>{servicos.descricao}</p>
          <p><span className="font-bold">Preço:</span> <span className="font-bold text-green-600">R$ {servicos.preco}</span></p>
          <p>
           <span className="font-bold">Categoria:</span> {servicos.categoria?.tipo}
          </p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarServicos/${servicos.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarServicos/${servicos.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto