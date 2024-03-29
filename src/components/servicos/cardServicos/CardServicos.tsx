import { useNavigate } from 'react-router-dom';
import Servicos from '../../../models/Servico';
interface CardServicoProps {
  servicos: Servicos;
}

function CardServicos({ servicos }: CardServicoProps) {
  const navigate = useNavigate();

  const handleAgendarClick = () => {
    navigate('/cadastroAgendamento', { state: { servico: servicos } });
  };
  
  return (
    <div className="container grid grid-cols-2 text-white mt-40">
      <div className='relative flex w-96 flex-col rounded-xl bg-white bg-opacity-50 transition duration-300  bg-clip-border text-gray-700 shadow-md mt-[-75px]'>
        <div>
          <img src={servicos.foto} className='rounded-xl max-h-52 w-full'/>
          <div className='content-between'>
            <div className='p-4 '>
              <div className="mb-2 flex items-center justify-between p-4">
                <p className="block text-lg font-bold text-center uppercase leading-relaxed text-blue-gray-900 antialiased">
                  {servicos?.nome}
                </p>
                <p className="block text-lg font-bold text-center uppercase leading-relaxed text-blue-gray-900 antialiased courier prime">
                  R$ {servicos.preco}
                </p>
              </div>
              <p>
                <span className="font-bold">Descrição do Serviço:</span>
                {servicos.descricao}
              </p>
              <p>
                <span className="font-bold">Categoria:</span>
                {servicos.categoria?.tipo}
              </p>
              <p>
                <span className="font-bold">Email p/ contato:</span> {servicos.usuario?.usuario}
              </p>
            </div>
            <div className="pb-12"></div>
            <div className="absolute bottom-0 w-full flex items-end justify-around ">
              <button onClick={handleAgendarClick} className='flex w-auto items-center my-4 text-white text-sm uppercase font-medium rounded  bg-cyan-700  hover:bg-cyan-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500'>
                Agende um horário
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardServicos;
