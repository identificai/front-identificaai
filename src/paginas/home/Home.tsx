import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ListaServicosHome from "../../components/servicos/listaServicos/ListaServicosHome";

function Home() {
  const [numPessoas, setNumPessoas] = useState(20000);

  const adicionarPessoa = () => {
    setNumPessoas(numPessoas + 1);
  };

  const formatarNumero = (numero: number) => {
    return numero.toLocaleString("pt-BR");
  };

  return (
    <>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="h-64 rounded-md overflow-hidden bg-cover bg-center fundo-Home">
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Nossos Serviços
                </h2>
                <p className="mt-2 text-gray-200">
                  Oferecemos diversos serviços com <br /> preços acessíveis,
                  além de serviços <br />
                  gratuitos para fornecer documentação
                  <br /> atualizada para todos.
                </p>
                <Link to="/servicos">
                  <button className="flex w-auto items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none bg-cyan-700  hover:bg-cyan-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    <span>Serviços</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 fundo-Categoria">
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Categorias
                  </h2>
                  <p className="mt-2 text-gray-200">
                    As categorias podem representar diversos tipos de documento
                    de propriedade ou certificação legal para exercício de
                    ofícios.
                  </p>
                  <Link to="/categorias">
                    <button className="flex w-auto items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none bg-cyan-700  hover:bg-cyan-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                      <span>Categoria</span>
                      <svg
                        className="h-5 w-5 mx-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full fundo-Agendamento">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-black font-semibold">
                    Agendamentos
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Verifique seus <br /> agendamentos
                  </p>
                  <Link to="/agendamentos">
                    <button className="flex w-auto items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none bg-cyan-700  hover:bg-cyan-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                      <span>Agendamentos</span>
                      <svg
                        className="h-5 w-5 mx-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">
              Principais Serviços
            </h3>
            <ListaServicosHome />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
