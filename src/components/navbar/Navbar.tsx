import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from "../../utils/toastAlerta";
import newLogo from '../../assets/newLogo.png'

function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', '');
    navigate('/login');
  }

  let navbarComponent;

  if (usuario && usuario.token !== "") {
    navbarComponent = (
      <>
        <header className="bg-white dark:bg-gray-900">
          <nav className="absolute z-20 w-full bg-white/60 dark:bg-gray-900/50 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
            <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-6 md:py-1 md:gap-0 lg:py-1">
                <div className="w-full items-center flex justify-between lg:w-auto">
                  <Link to="/" className="relative z-10 text-sm font-semibold text-blue-600 dark:text-blue-400 lg:text-2xl text-xl uppercase font-bold" aria-label="logo">
                  <img src={newLogo} alt="Logo" className="max-w-16 h-auto mr-2" />
                  </Link>
                </div>
                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0 ml-auto">
                  <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                      <li>
                        <Link to="/home" className="block md:px-4 transition duration-300 hover:text-teal-400">Home</Link>
                      </li>
                      <li>
                        <Link to="/categorias" className="block md:px-4 transition duration-300 hover:text-teal-400">Categorias</Link>
                      </li>
                      <li>
                        <Link to="/servicos" className="block md:px-4 transition duration-300 hover:text-teal-400">Serviços</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l ">
                    <button
                      onClick={logout}
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 ms-8 ..."
                    >
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900 ">
                        Logout
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  } else {
    navbarComponent = (
      <>
        {/* Conteúdo do navbar para usuários não logados */}
      </>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
