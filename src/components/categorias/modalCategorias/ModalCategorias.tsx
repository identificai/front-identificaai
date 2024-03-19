import FormularioCategorias from '../formularioCategoria/FormularioCategoria';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalCategorias.css'

function ModalCategoria() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 bg-white bg-opacity-60 block md:px-4 transition duration-300 '>Nova categoria</button>} modal>
        <div>
          <FormularioCategorias />
        </div>
      </Popup>
    </>
  );
}

export default ModalCategoria;