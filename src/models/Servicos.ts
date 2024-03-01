import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface ModelServicos{
     id: number;
     nome: string;
     descricao: string;
     foto: string;
     quantidade: number;
     preco: number;
     categoria: Categoria | null;
     usuario: Usuario | null;
     }


