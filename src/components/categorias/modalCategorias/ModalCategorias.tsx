import React from 'react';
import FormularioCategorias from '../formularioCategoria/FormularioCategoria';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalCategorias.css'

function ModalCategoria() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white block md:px-4 transition duration-300 hover:text-teal-400'>Nova categoria</button>} modal>
        <div>
          <FormularioCategorias />
        </div>
      </Popup>
    </>
  );
}

export default ModalCategoria;