import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import Agendamento from '../../../models/Agendamento';

function FormularioAgendamentos() {
  const navigate = useNavigate();
  const location = useLocation();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [agendamento, setAgendamento] = useState<Agendamento>({
    id: 0,
    nome: '',
    dataAgendamento: new Date(), 
    usuario: null,
    servico: null, 
  });

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
    if (location.state && location.state.servico) {
      setAgendamento({
        ...agendamento,
        servico: location.state.servico,
      });
    }
  }, [token]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setAgendamento({
      ...agendamento,
      [e.target.name]: e.target.value,
      usuario: usuario,
    });
  }

  function atualizarDataAgendamento(data: Date) {
    setAgendamento({
      ...agendamento,
      dataAgendamento: data,
    });
  }

  function retornar() {
    navigate('/agendamentos');
  }

  async function gerarNovoAgendamento(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agendamento.servico || !agendamento.servico.id) {
      toastAlerta('Por favor, selecione um serviço', 'info');
      return;
    }

    try {
      await cadastrar(`/agendamentos`, agendamento, setAgendamento, {
        headers: {
          Authorization: token,
        },
      });
      toastAlerta('Agendamento cadastrado com sucesso', 'sucesso');
      retornar();
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      } else {
        toastAlerta('Erro ao cadastrar o Agendamento', 'erro');
      }
    }
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">Cadastrar Agendamento</h1>

      <form onSubmit={gerarNovoAgendamento} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do requerinte</label>
          <input
            value={agendamento.nome}
            onChange={atualizarEstado}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dataAgendamento">Data do agendamento:</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => atualizarDataAgendamento(new Date(e.target.value))}
            type="date"
            placeholder="dd/mm/aa"
            name="dataAgendamento"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <button type='submit' className='rounded bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormularioAgendamentos;
