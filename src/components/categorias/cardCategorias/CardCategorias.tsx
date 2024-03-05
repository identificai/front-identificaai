import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    // <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
    //   <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>{categoria?.tipo}</header>
    //   <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
    //   <div className="flex">
    //     <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
    //       <button>Editar</button>
    //     </Link>
    //     <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
    //       <button>Deletar</button>
    //     </Link>
    //   </div>
    // </div>

    <div className='relative flex w-96 flex-col rounded-xl bg-white bg-opacity-50 transition duration-300 hover:text-teal-400 bg-clip-border text-gray-700 shadow-md mt-[-75px]'>
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
    <div className="flex items-end justify-around">
    <Link to={`/editarServicos/${categoria.id}`} className='w-5/12 text-white bg-green-400 hover:bg-green-800 flex items-center justify-center py-2 rounded-xl'>
        <button>Editar</button>
      </Link>
      <Link to={`/deletarServicos/${categoria.id}`} className='text-white bg-red-400 hover:bg-red-700 w-5/12 flex items-center justify-center py-2 rounded-xl'>
        <button>Deletar</button>
      </Link>
      </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CardCategorias
