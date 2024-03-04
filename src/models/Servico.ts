import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Servico{
     id: number;
     nome: string;
     descricao: string;
     foto: string;
     quantidade: number;
     preco: number;
     categoria: Categoria | null;
     usuario: Usuario | null;
     }