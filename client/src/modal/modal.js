// Modal.js

import React from 'react';
import { ReactDOM } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] z-[100]">
      <div className="w-[60%] mx-auto">
        <button
          className="absolute top-[5px] right-[5px] font-semibold text-[30px] text-[#999]"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
