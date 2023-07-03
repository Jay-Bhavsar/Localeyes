import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Modal Content</h2>
        <p>{content}</p>
      </div>
    </div>
  ) : null;
};

export default Modal;
