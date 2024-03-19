import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <>
      <article className="text-xl tcontainer bg-white shadow-2xl rounded-2xl p-5">
        <h1 className="font-bold text-cyan-700">{categoria?.tipo}</h1>
        <p className="my-4 font-light text-gray-500 hover:font-bold">
          {categoria.descricao}
        </p>
        <div className="space-x-4">
          <Link
            to={`/editarCategoria/${categoria.id}`}
            className="my-4 rounded-lg py-2 px-4 text-center text-white  bg-cyan-700  hover:bg-cyan-500"
          >
            Editar
          </Link>

          <Link
            to={`/deletarCategoria/${categoria.id}`}
            className="my-4 rounded-lg py-2 px-4 text-center text-white  bg-gray-700  hover:bg-gray-500"
          >
            Deletar
          </Link>
        </div>
      </article>
    </>
  );
}

export default CardCategorias;
