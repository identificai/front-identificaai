import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Servico from '../../../models/Servico';
import { buscar } from '../../../services/Service';
import CardServico from '../cardServicos/CardServicos';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaServicos() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarServicos() {
    try {
      await buscar('/servicos', setServicos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarServicos();
  }, [servicos.length]);

  return (
    <>
      {servicos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {servicos.map((servico) => (
          <CardServico key={servico.id} servicos={servico} />
        ))}
      </div>
    </>
  );
}

export default ListaServicos;