import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Agendamento from '../../../models/Agendamento';
import { buscar } from '../../../services/Service';
import CardAgendamento from '../cardAgendamento/CardAgendamento';
import { toastAlerta } from '../../../utils/toastAlerta';
import './ListaAgendamento.css';

function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [userId, setUserId] = useState<number | null>(null); // Alterado para number | null
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    } else {
      setUserId(usuario.id);
    }
  }, [token]);

  useEffect(() => {
    if (userId !== null) {
      buscarAgendamentosUsuario();
    }
  }, [userId]);

  async function buscarAgendamentosUsuario() {
    try {
      await buscar(`/agendamentos/usuario`, setAgendamentos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
  }
  
  

  return (
    <>
      {agendamentos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="flex justify-center w-full my-4 container-scroll" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <div className="container flex flex-col">
          <div className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agendamentos.map((agendamento) => (
              <CardAgendamento key={agendamento.id} agendamento={agendamento} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaAgendamentos;

