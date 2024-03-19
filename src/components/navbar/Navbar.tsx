import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
import newLogo from "../../assets/iden.png";
import useClickOutside from "../../eventListener/useClickOutside";

function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  const [userDropdown, setUserDropdown] = useState(false);

  const ref = useClickOutside(handleClickOutside);

  function handleClickOutside() {
    setUserDropdown(false);
  }

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "");
    navigate("/sobre");
  }

  let navbarComponent;

  if (usuario && usuario.token !== "") {
    navbarComponent = (
      <>
        <div
          className="flex flex-col items-center justify-center mt-32"
          x-cloak=""
          x-data="appData()"
          x-init="appInit()"
        >
          <div className="flex flex-col">
            {/* Page Scroll Progress */}
            <div
              className="fixed inset-x-0 top-0 z-20 h-0.5 mt-0.5
      bg-blue-500"
            />
            {/* Navbar */}
            <nav
              className="flex justify-around py-4 bg-white/80
      backdrop-blur-md shadow-md w-full
      fixed top-0 left-0 right-0 z-20"
            >
              {/* Logo Container */}
              <div className="flex items-center">
                {/* Logo */}
                <Link to={"/home"} className="cursor-pointer">
                  <h3 className="text-2xl font-medium text-cyan-700 hover:text-cyan-500">
                    <img
                      className="h-20 object-cover"
                      src={newLogo}
                      alt="Store Logo"
                    />
                  </h3>
                </Link>
              </div>
              {/* Links Section */}
              <div className="items-center hidden space-x-8 lg:flex">
                {usuario.tipo !== "Consumidor" ? (
                  <Link
                    to={"/servicos"}
                    className="flex text-cyan-700 hover:text-cyan-500
              cursor-pointer transition-colors duration-300  text-2xl font-semibold"
                  >
                    Serviços
                  </Link>
                ) : (
                  <Link
                    to={"/servicos"}
                    className="flex text-cyan-700 hover:text-cyan-500
            cursor-pointer transition-colors duration-300  text-2xl font-semibold"
                  >
                    Meus Serviços
                  </Link>
                )}
              </div>
              

              {/* <ModalCategoria/>
              <ModalServico/> */}
              {/* Icon Menu Section
        {/* Register */}
              <li
                onClick={() => {
                  setUserDropdown(true);
                }}
                id="userDropdown"
                className="flex text-cyan-700 hover:text-cyan-500
              cursor-pointer transition-colors duration-300 items-center space-x-5"
              >
                <div className="hover:bg-gray-200 rounded-md transition-all p-2">
                  <div className="h-10">
                    <svg
                      className="fill-current h-10 w-10 mr-2 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                    </svg>
                  </div>
                </div>
                {usuario.token !== "" ? (
                  <div
                    id="dropdownDivider"
                    className={`z-20 ${
                      userDropdown ? "" : "hidden"
                    } bg-white divide-y divide-gray-100 rounded-b-md shadow w-full md:w-60 absolute top-28 right-8 `}
                  >
                    <svg
                      className="hidden md:block absolute text-white h-4 right-[7.3rem] -top-4 rotate-180 drop-shadow-2xl"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xmlSpace="preserve"
                    >
                      <polygon
                        className="fill-gray-300"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                    <ul
                      ref={ref}
                      className="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownDividerButton"
                    >
                      <li>
                        <div className="block px-4 py-2">
                          Olá, {usuario.nome}
                        </div>
                      </li>
                      <li>
                        <Link
                          to={`/agendamentos/${usuario.id}`}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Serviços Agendados
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/conta"}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Configurações
                        </Link>
                      </li>
                    </ul>
                    <div className="py-2">
                      <button
                        className="w-full text-left block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                        onClick={logout}
                      >
                        Sair
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    id="dropdownDivider"
                    className={`z-20 ${
                      userDropdown ? "" : "hidden"
                    } bg-white divide-y divide-gray-100 rounded-b-md shadow w-full md:w-60 absolute top-14 right-0 md:-right-24`}
                  >
                    <svg
                      className="hidden md:block absolute text-white h-4 right-[7.3rem] -top-4 rotate-180 drop-shadow-2xl"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xmlSpace="preserve"
                    >
                      <polygon
                        className="fill-gray-300"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                    <ul
                      ref={ref}
                      className="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownDividerButton"
                    >
                      <li>
                        <Link
                          to={"/login"}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/cadastro"}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Criar conta
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </nav>
          </div>
        </div>
      </>
    );
  } else {
    navbarComponent = (
      <>
        <div
          className="flex flex-col items-center justify-center mt-32"
          x-cloak=""
          x-data="appData()"
          x-init="appInit()"
        >
          <div className="flex flex-col">
            {/* Page Scroll Progress */}
            <div
              className="fixed inset-x-0 top-0 z-20 h-0.5 mt-0.5
    bg-blue-500"
            />
            {/* Navbar */}
            <nav
              className="flex justify-around py-4 bg-white/80
    backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-20"
            >
              {/* Logo Container */}
              <div className="flex items-center">
                {/* Logo */}
                <a className="cursor-pointer">
                  <h3 className="text-2xl font-medium text-cyan-700 hover:text-cyan-500">
                    <img
                      className="h-20 object-cover"
                      src={newLogo}
                      alt="Store Logo"
                    />
                  </h3>
                </a>
              </div>
              {/* Links Section */}
              <div className="items-center hidden space-x-8 lg:flex">
                <a
                  className="flex text-cyan-700 hover:text-cyan-500
            cursor-pointer transition-colors duration-300  text-2xl font-semibold"
                >
                  Sobre Nós
                </a>
              </div>
              <li
                onClick={() => {
                  setUserDropdown(true);
                }}
                id="userDropdown"
                className="flex text-cyan-700 hover:text-cyan-500
            cursor-pointer transition-colors duration-300 items-center space-x-5"
              >
                <div className="hover:bg-gray-200 rounded-md transition-all p-2">
                  <div className="h-10">
                    <svg
                      className="fill-current h-10 w-10 mr-2 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                    </svg>
                  </div>
                </div>
                <div
                  id="dropdownDivider"
                  className={`z-20 ${
                    userDropdown ? "" : "hidden"
                  } bg-white divide-y divide-gray-100 rounded-b-md shadow w-full md:w-60 absolute top-28 right-8`}
                >
                  <svg
                    className="hidden md:block absolute text-white h-4 right-[7.3rem] -top-4 rotate-180 drop-shadow-2xl"
                    x="0px"
                    y="0px"
                    viewBox="0 0 255 255"
                    xmlSpace="preserve"
                  >
                    <polygon
                      className="fill-gray-300"
                      points="0,0 127.5,127.5 255,0"
                    />
                  </svg>
                  <ul
                    ref={ref}
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDividerButton"
                  >
                    <li>
                      <Link
                        to={"/login"}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/cadastro"}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Criar conta
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </nav>
          </div>
        </div>
      </>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
