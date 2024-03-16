import { ChangeEvent, useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="absolute inset-0 z-0" />
      <form className="min-h-screen sm:flex sm:flex-row mx-0 justify-center" onSubmit={login}>
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-slate-700">
            <img src="" className="mb-3" />
            <h1 className="mb-3 font-bold text-5xl ">Seja Bem Vindo Ao Identifica Aí </h1>
            <p className="pr-3">
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Login </h3>
              <p className="text-gray-500">Entre com as informações para entrar em sua conta.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-700 tracking-wide"
                  htmlFor="usuario"
                >
                  Usuário
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Usuario"
                  value={usuarioLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="space-y-2">
                <label
                  className="mb-5 text-sm font-medium text-gray-700 tracking-wide"
                  htmlFor="senha"
                >
                  Senha
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  value={usuarioLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-3/4 flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  {isLoading ? (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    />
                  ) : (
                    <span>Entrar</span>
                  )}
                </button>
              </div>
            </div>
            <hr className="border-slate-800 w-full" />
            <p>
              Ainda não tem uma conta?{" "}
              <Link to="/cadastro" className="text-green text-bold hover:text-green-500 ">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
