import FormularioServicos from '../formularioServicos/FormularioServicos';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalServicos.css'

function ModalServico() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 bg-white bg-opacity-60 block md:px-4 transition duration-300'>Novo serviço</button>} modal>
        <div>
          <FormularioServicos />
        </div>
      </Popup>
    </>
  );
}

export default ModalServico;