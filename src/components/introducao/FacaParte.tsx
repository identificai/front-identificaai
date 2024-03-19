import { Link } from "react-router-dom";
import "./Facaparte.css";

function FacaParte() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="h-64 rounded-md overflow-hidden bg-cover bg-center fundo-faca">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Cadastre-se</h2>
              <p className="mt-2 text-gray-200">
                Registre-se agora para acessar cartórios próximos, agendar
                serviços, obter informações sobre documentos e suporte
                personalizado
              </p>
              <Link to="/cadastro">
                <button className="flex w-auto items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none bg-cyan-700  hover:bg-cyan-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                  <span>Cadastre-se</span>
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
    </>
  );
}

export default FacaParte;
