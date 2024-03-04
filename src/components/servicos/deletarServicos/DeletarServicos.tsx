import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { deletar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';

async function deletarServico(id: string, token: string, navigate: any, handleLogout: () => void) {
  try {
    await deletar(`/servicos/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    toastAlerta('Serviço deletado com sucesso', 'sucesso');
    navigate('/servicos');
  } catch (error: any) {
    handleErroServico(error, handleLogout);
  }
}

function handleErroServico(error: any, handleLogout: () => void) {
  if (error.toString().includes('403')) {
    toastAlerta('O token expirou, favor logar novamente', 'info');
    handleLogout();
  } else {
    toastAlerta('Erro ao deletar o serviço', 'erro');
  }
}

export default deletarServico;
