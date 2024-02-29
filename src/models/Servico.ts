import Categoria from './Categoria';
import Usuario from './Usuario';

interface Servico {
  id: number;
  nome: string;
  descricao: string;
  foto?: string;
  avaliacao: string;
  quantidade: number;
  preco: number;
  categoria: Categoria;
  usuario: Usuario;
}

export default Servico;
