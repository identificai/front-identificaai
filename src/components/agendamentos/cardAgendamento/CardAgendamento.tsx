import { Link } from "react-router-dom";
import Agendamento from "../../../models/Agendamento";

interface CardAgendamentosProps {
  agendamento: Agendamento;
}

function formatarData(dataString: Date) {
  const data = new Date(dataString);
  return data.toLocaleDateString("pt-BR");
}

function CardAgendamentos({ agendamento }: CardAgendamentosProps) {
  return (
    <article className="text-xl tcontainer bg-white shadow-2xl rounded-2xl p-5">
      <h1 className="font-bold text-cyan-700">
        Nome do requerente: {agendamento.nome}
      </h1>
      <p className="my-4 font-light text-gray-500 hover:font-bold">
        <span className="text-gray-700 hover:text-gray-900">
          Serviço contratado:
        </span>{" "}
        {agendamento.servico?.nome}
      </p>
      <p className="my-4 font-light text-gray-500 hover:font-bold">
        <span className="text-gray-700 hover:text-gray-900">R$:</span>{" "}
        {agendamento.servico?.preco}
      </p>
      <p className="my-4 font-light text-gray-500 hover:font-bold">
        <span className="text-gray-700 hover:text-gray-900">
          Descrição do Serviço:
        </span>{" "}
        {agendamento.servico?.descricao}
      </p>
      <p className="my-4 font-light text-gray-500 hover:font-bold">
        <span className="text-gray-700 hover:text-gray-900">
          Email do requerente:
        </span>{" "}
        {agendamento.usuario?.usuario}
      </p>
      <p className="my-4 font-light text-gray-500 hover:font-bold">
        <span className="text-gray-700 hover:text-gray-900">Data:</span>
        {formatarData(agendamento.dataAgendamento)}
      </p>
      <div className="space-x-4">
        <Link
          to={`/editarAgendamento/${agendamento.id}`}
          className="my-4 rounded-lg py-2 px-4 text-center text-white  bg-cyan-700  hover:bg-cyan-500"
        >
          Editar
        </Link>

        <Link
          to={`/deletarAgendamento/${agendamento.id}`}
          className="my-4 rounded-lg py-2 px-4 text-center text-white  bg-gray-700  hover:bg-gray-500"
        >
          Deletar
        </Link>
      </div>
    </article>
  );
}

export default CardAgendamentos;
