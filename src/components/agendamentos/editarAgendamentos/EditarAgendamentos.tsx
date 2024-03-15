import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import Agendamento from '../../../models/Agendamento';
import Servico from '../../../models/Servico';



function EditarAgendamentos() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [servicos, setServicos] = useState<Servico[]>([]);

  const [servico, setServico] = useState<Servico>({
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    foto: '',
    categoria: null,
    usuario: null,
  });

  const [agendamento, setAgendamento] = useState<Agendamento>({
    id: 0,
    nome: '',
    dataAgendamento: new Date(), 
    usuario: null,
    servico: null, 
  });

  async function buscarAgendamentoPorId(id: string) {
    await buscar(`/agendamentos/${id}`, setAgendamento, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarServicoPorId(id: string) {
    await buscar(`/servicos/${id}`, setServico, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarServicos() {
    await buscar('/servicos', setServicos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarServicos();
    if (id !== undefined) {
      buscarAgendamentoPorId(id);
      console.log(servico);
    }
  }, [id]);

  useEffect(() => {
    setAgendamento({
      ...agendamento,
      servico: servico,
    });
  }, [servico]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setAgendamento({
      ...agendamento,
      [e.target.name]: e.target.value,
      servico: servico,
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

  async function gerarNovoAgendamento(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ agendamento });

    if (id !== undefined) {
      try {
        await atualizar(`/agendamentos`, agendamento, setAgendamento, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Agendamento atualizado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar o Agendamento', 'erro');
        }
      }
    } else {
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
  }

  const carregandoServico = servico.descricao === '';

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Insira seus dados' : 'Cadastrar '}</h1>

      <form onSubmit={gerarNovoAgendamento} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do requerinte</label>
          <input
            value={agendamento.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        {/* <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Endereço</label>
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div> */}
        {/* <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto 3x4</label>
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div> */}
        <div className="flex flex-col gap-2">
          <label htmlFor="dataAgendamento">Data do agendamento:</label>
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarDataAgendamento(new Date(e.target.value))}
            type="date"
            placeholder="dd/mm/aa"
            name="dataAgendamento"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Nome do Serviço</p>
          <select name="servico" id="servico" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarServicoPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione um serviço</option>
            {servicos.map((servico) => (
              <>
                <option value={servico.id} >{servico.nome}</option>
              </>
            ))}
          </select>
        </div>
        <button type='submit' className='rounded bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>

      </form>
    </div>
  );
}

export default EditarAgendamentos;