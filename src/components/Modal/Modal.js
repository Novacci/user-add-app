import React from 'react';
import modalStyle from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={modalStyle.backdrop}>
      <div className={modalStyle.modal}>
        <div className={modalStyle.header}>
          <h2>Attiention</h2>
        </div>
        <div className={modalStyle.content}>{props.content}</div>
        <div className={modalStyle.actions}>
          <button onClick={props.modalStop}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
