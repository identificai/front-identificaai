import React from 'react';
import FormularioServicos from '../formularioServicos/FormularioServicos';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalServicos.css'

function ModalServico() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo serviço</button>} modal>
        <div>
          <FormularioServicos />
        </div>
      </Popup>
    </>
  );
}

export default ModalServico;