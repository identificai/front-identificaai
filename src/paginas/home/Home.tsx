import { useState } from "react";
import "./Home.css";
import ModalServicos from "../../components/servicos/modalServicos/ModalServicos";
import { Link } from "react-router-dom";
//import videobgg from "../../assets/videobgg.mp4";
import ModalCategoria from "../../components/categorias/modalCategorias/ModalCategorias";

function Home() {

  const [numPessoas, setNumPessoas] = useState(20000);

  const adicionarPessoa = () => {
    setNumPessoas(numPessoas + 1);
  };

  const formatarNumero = (numero: number) => {
    return numero.toLocaleString('pt-BR');
  };
  
  return (
    <div className="back-home">
      {/* <video className="video-background" autoPlay loop muted>
        <source src={videobgg} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video> */}
      <div className="container grid grid-cols-2 text-white"></div>

      <div className="container grid grid-cols-2 text-black mt-40">
        <div className="flex flex-col gap-4 items-center justify-center py-4 mt-8">
          <h2 className="text-5xl font-bold">Identifica Aí!</h2>
          <p className="text-xl">Programa destinado a documentação de todes!</p>
          <button onClick={adicionarPessoa} className="rounded bg-white text-black-600 dark:text-black-300 bg-opacity-60 py-2 px-4 block md:px-4 transition duration-300 hover:text-teal-400">
            Adicionar 
          </button>
          <div className="rounded bg-white text-black-600 dark:text-black-300 bg-opacity-60 py-2 px-4 block md:px-4 transition duration-300 hover:text-teal-400">
  <p className="text-xl">Pessoas beneficiadas: {formatarNumero(numPessoas)}</p>
</div>

          <div className="flex justify-around gap-4">
            <ModalServicos />
            <ModalCategoria />
            <Link
              to="/categorias"
              className="rounded bg-white text-black-600 dark:text-black-300 bg-opacity-60 py-2 px-4 block md:px-4 transition duration-300 hover:text-teal-400"
            >
              Ver categorias
            </Link>
            <Link
              to="/servicos"
              className="rounded bg-white text-black-600 dark:text-black-300 bg-opacity-60 py-2 px-4 block md:px-4 transition duration-300 hover:text-teal-400"
            >
              Serviços
            </Link>
            <Link
              to="/agendamentos"
              className="rounded bg-white text-gray-600 dark:text-gray-300 bg-opacity-60 py-2 px-4 block md:px-4 transition duration-300 hover:text-teal-400"
            >
              Agendamentos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;