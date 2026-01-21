import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button
            className='border rounded px-4 py-2 bg-sky-400 hover:bg-sky-500 hover:text-white'>
            Nova Postagem
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '1rem',
          paddingBottom: '2rem'
        }}
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;