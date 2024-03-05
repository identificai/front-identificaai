import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className="container grid grid-cols-2 text-white mt-40">
        <div className='relative flex w-96 flex-col rounded-xl bg-white bg-opacity-50 transition duration-300 hover:text-teal-400 bg-clip-border text-gray-700 shadow-md md-[-75px]'>
    <div>
      <div className='content-between'>
      <div className='p-4 '>
      <div className="mb-2 flex items-center justify-between p-4">
        <p className="block text-lg font-bold text-center uppercase leading-relaxed text-blue-gray-900 antialiased">
          {categoria?.tipo}
        </p>
      </div>
        <p>
          <span className="font-bold">Descrição da Categoria:</span>
           {categoria.descricao}
        </p>
        <div className="pb-12"></div>
    <div className="absolute bottom-0 w-full flex items-end justify-around pr-8">
    <Link to={`/editarCategoria/${categoria.id}`} className='w-5/12 text-white bg-green-400 hover:bg-green-800 flex items-center justify-center py-2 rounded-xl'>
        <button>Editar</button>
      </Link>
      <Link to={`/deletarCategoria/${categoria.id}`} className='text-white bg-red-400 hover:bg-red-700 w-5/12 flex items-center justify-center py-2 rounded-xl'>
        <button>Deletar</button>
      </Link>
      </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default CardCategorias
