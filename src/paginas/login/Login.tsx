import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cadastro/Cadastro.css";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
import Popup from "reactjs-popup";

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
      <Popup
        trigger={<a className="block px-4 py-2 hover:bg-gray-100">Entrar</a>}
        modal
      >
        <div className=" grid grid-cols-1 py-2 place-items-center font-bold ">
          <div className="fundoLogin hidden lg:block"></div>
          <form
            className=" flex justify-center items-center flex-col w-3/4 gap-4"
            onSubmit={login}
          >
            <h2 className="cor-texto-padrao text-5xl ">Entrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="E-mail"
                className="bg-component border-2 border-slate-700 rounded p-2"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="bg-component border-2 border-slate-700 rounded p-2"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex container justify-between w-full">
              <button
                type="submit"
                className="rounded cor-acessorio hover:bg-green-700 text-white w-1/2 py-2 flex justify-center"
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
              <button className="rounded cor-acessorio hover:bg-green-700 text-white w-1/2 py-2 flex justify-center">
                <span>Voltar</span>
              </button>
            </div>
          </form>
        </div>
      </Popup>
    </>
  );
}

export default Login;
