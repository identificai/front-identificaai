import { useContext, useEffect, useState } from "react";
import { Dna, RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import CardServico from "../cardServicos/CardServicos";
import { toastAlerta } from "../../../utils/toastAlerta";
import "./ListaServicos.css";

function ListaServicos() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  async function buscarServicos() {
    try {
      await buscar("/servicos", setServicos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarServicos();
  }, [servicos.length]);

  return (
    <>
      {servicos.length === 0 && (
        <div className="flex justify-center">
        <RotatingLines
          visible={true}
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          ariaLabel="loading"
        />
        </div>
      )}

      <div
        className="flex justify-center w-full my-4 container-scroll"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <div className="container flex flex-col">
          <div className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico) => (
              <CardServico key={servico.id} servicos={servico} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaServicos;
