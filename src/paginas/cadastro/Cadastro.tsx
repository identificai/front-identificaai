import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { toastAlerta } from "../../utils/toastAlerta";

function Cadastro() {
  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    tipo: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    tipo: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value
    });
  }


  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        toastAlerta("Usuário cadastrado com sucesso", 'sucesso');
      } catch (error) {
        toastAlerta("Erro ao cadastrar o Usuário", 'erro');
      }
    } else {
      toastAlerta("Dados inconsistentes. Verifique as informações de cadastro.", 'erro');
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <form
              className="container flex flex-col pb-6 text-center rounded-3xl mt-0"
              onSubmit={cadastrarNovoUsuario}
            >
              <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
              <div className="flex flex-col w-full">
                <label htmlFor="nome" className="mb-2 text-sm text-start text-grey-900">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  className="flex items-center w-full px-5 py-1 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  value={usuario.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="tipo" className="mb-2 text-sm text-start text-grey-900">Tipo de Usuário</label>
                <select
                  id="tipo"
                  name="tipo"
                  className="flex items-center w-full px-5 py-1 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  value={usuario.tipo}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstado(e)}>
                  <option value="">Selecione o tipo de usuário</option>
                  <option value="Consumidor">Consumidor</option>
                  <option value="Prestador de serviço">Prestador de serviço</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="usuario" className="mb-2 text-sm text-start text-grey-900">Email</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Email"
                  className="flex items-center w-full px-5 py-1 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  value={usuario.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="foto" className="mb-2 text-sm text-start text-grey-900">Foto</label>
                <input
                  type="text"
                  id="foto"
                  name="foto"
                  placeholder="Foto"
                  className="flex items-center w-full px-5 py-1 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  value={usuario.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="senha" className="mb-2 text-sm text-start text-grey-900">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  className="flex items-center w-full px-5 py-1 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  value={usuario.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="confirmarSenha" className="mb-2 text-sm text-start text-grey-900">Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  placeholder="Confirmar Senha"
                  className="flex items-center w-full px-5 py-1 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleConfirmarSenha(e)
                  }
                />
              </div>
              <div className="flex justify-around w-full gap-8">
                <button
                  className='text-white  bg-gray-700  hover:bg-gray-500 w-5/12 flex items-center justify-center py-2 rounded-xl'
                  onClick={back}
                >
                  Cancelar
                </button>
                <button
                  className='w-5/12 text-white bg-cyan-700  hover:bg-cyan-500 flex items-center justify-center py-2 rounded-xl'
                  type="submit"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
