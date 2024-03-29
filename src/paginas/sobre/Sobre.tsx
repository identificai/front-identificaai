import "./Sobre.css";
import imagemSobre from "../../assets/sobrenos.jpg";
import Introducao from "../../components/introducao/Introducao";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import FacaParte from "../../components/introducao/FacaParte";

function Sobre() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  return (
    <>
      <Introducao />
      <section className="relative pt-2 bg-blueGray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mx-auto lg:mx-16 -mt-78">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src={imagemSobre}
                  className="w-full align-middle rounded-t-lg max-h-96"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-black">
                    Sobre nossa organização
                  </h4>
                  <p className="mb-4 text-blueGray-500">
                    Nossa visão é criar um mundo onde cada pessoa tenha uma
                    identidade legal reconhecida e respeitada, independentemente
                    de sua origem, status socioeconômico ou local de residência.
                    Queremos ser líderes na prestação de serviços que ajudem a
                    eliminar as barreiras burocráticas e a promover a inclusão e
                    a igualdade de oportunidades para todos.{" "}
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl text-center mb-8">
                Nossos Valores
              </h2>
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-4 h-4 mb-5 shadow-lg rounded-full bg-cyan-700">
                        <i className="fas fa-sitemap" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Acessibilidade
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Buscamos tornar nossos serviços acessíveis a todas as
                        pessoas, garantindo que os custos não sejam uma barreira
                        para obter uma identidade legal.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-4 h-4 mb-5 shadow-lg rounded-full bg-cyan-700">
                        <i className="fas fa-drafting-compass" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Inovação</h6>
                      <p className="mb-4 text-blueGray-500">
                        Estamos sempre buscando maneiras de melhorar e
                        simplificar nossos processos, utilizando tecnologia e
                        práticas eficientes para oferecer uma experiência
                        superior aos nossos clientes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-4 h-4 mb-5 shadow-lg rounded-full bg-cyan-700">
                        <i className="fas fa-newspaper" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Qualidade</h6>
                      <p className="mb-4 text-blueGray-500">
                        Comprometemo-nos com a excelência em todos os aspectos
                        de nossos serviços, garantindo a precisão e a
                        confiabilidade de todos os documentos fornecidos.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-4 h-4 mb-5 shadow-lg rounded-full bg-cyan-700">
                        <i className="fas fa-file-alt" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Integração</h6>
                      <p className="mb-4 text-blueGray-500">
                        Atuamos com honestidade e transparência em todas as
                        nossas interações, mantendo os mais altos padrões éticos
                        em nosso trabalho.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FacaParte/>
    </>
  );
}

export default Sobre;
