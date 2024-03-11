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
      // <>
      //   <header className="fixed w-full bg-white text-gray-800 flex justify-center py-4 drop-shadow-md z-50">
      //     <nav className="flex w-full justify-around  text-lg items-center">
      //       <div className="text-2xl font-bold text-green-800">
      //           <div className="w-full items-center flex justify-between lg:w-auto">
      //             <Link to="/" className="relative z-10 text-sm font-semibold text-blue-600 dark:text-blue-400 lg:text-2xl text-xl uppercase font-bold" aria-label="logo">
      //             <img src={newLogo} alt="Logo" className="max-w-16 h-auto mr-2" />
      //             </Link>
      //           </div>
      //           <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0 ml-auto">
      //             <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
      //               <ul className="flex gap-4 items-center relative">
      //                 <li>
      //                   <Link to="/home" className="py-2 text-sm text-gray-700 hover:text-teal-400">Home</Link>
      //                 </li>
      //                 <li>
      //                   <Link to="/categorias" className="py-2 text-sm text-gray-700 hover:text-teal-400">Categorias</Link>
      //                 </li>
      //                 <li>
      //                   <Link to="/servicos" className="py-2 text-sm text-gray-700 hover:text-teal-400">Serviços</Link>
      //                 </li>
      //               </ul>
      //             </div>
      //             <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l ">
      //               <button
      //                 onClick={logout}
      //                 className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 ms-8 ..."
      //               >
      //                 <span className="relative text-sm font-semibold text-white dark:text-gray-900 ">
      //                   Logout
      //                 </span>
      //               </button>
      //             </div>
      //           </div>
      //       </div>
      //     </nav>
      //   </header>
      // </>
      <>
      <div className="flex backdrop-blur-3xl bg-white/30 px-20 border-b py-4 sticky z-30 w-screen">
        <div className="flex-1">
          <img
            className="sm:translate-x-6 rounded-lg"
            alt="Logo"
            width={77}
            height={77}
            src={newLogo}
          />
        </div>
        <div className="flex-row justify-content self-center">
        <ul>
          <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span> Setting </span>
          </li>          <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span> Setting </span>
          </li>
        </ul>
          <a
            href="https://threads.net/100daysofnextjs"
            className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1"
          >
            <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z" />
              </svg>
              <span>Sign out</span>
            </span>
          </a>
        </div>
      </div>
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
