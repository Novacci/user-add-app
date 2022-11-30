import React from 'react';
import modalStyle from './Modal.module.css';

const Modal = () => {
  return (
    <div className={modalStyle.backdrop}>
      <div className={modalStyle.modal}>
        <div className={modalStyle.header}>
          <h2>Attiention</h2>
        </div>
        <div className={modalStyle.content}>
          Unfortunetly you have typed wrong value in the Age input.
        </div>
        <div className={modalStyle.actions}>
          <button>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
