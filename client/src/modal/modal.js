import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] z-[100]"
      onClick={onClose}
    >
      <div
        className="relative w-[40%] mx-auto bg-white p-4 rounded-2xl shadow-sm"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-[10px] right-[10px] font-semibold text-[30px] text-[#999]">
          <AiOutlineClose className="cursor-pointer" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
