import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Agendamento from "../../../models/Agendamento";
import { buscar, deletar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";

function DeletarAgendamento() {
  const [agendamento, setAgendamento] = useState<Agendamento>(
    {} as Agendamento
  );

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/agendamentos/${id}`, setAgendamento, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/agendamentos");
  }

  async function deletarAgendamento() {
    try {
      await deletar(`/agendamentos/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Agendamento apagadado com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o agendamento", "erro");
    }

    retornar();
  }
  function formatarData(dataString: Date) {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR");
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar agendamento</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o agendamento a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-slate-700  text-2xl text-white font-bold">
          Agendamento
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">
          {agendamento.nome} 
        </p>
        <p className="p-8 text-3xl bg-slate-200 h-full">
        {agendamento.servico?.nome} {formatarData(agendamento.dataAgendamento)}
        </p>
        <div className="flex">
          <button
            className="text-slate-100 text-white  bg-gray-700  hover:bg-gray-500 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 text-white  bg-cyan-700  hover:bg-cyan-500 flex items-center justify-center"
            onClick={deletarAgendamento}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarAgendamento;
