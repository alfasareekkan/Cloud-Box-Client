/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import CloseButton from './CloseButton';

function Modal({
  children, id, active, closeActive,
}) {
  const handleClose = (e) => {
    if (e.target.id === id) {
      closeActive();
    }
  };

  return (
    <div
      id={id}
      onClick={handleClose}
      className={`${
        active ? 'flex' : 'hidden'
      } fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm  justify-center items-center z-[1000000]`}
    >
      <div
        className={active ? 'opacity-100 w-80 h-40 bg-white rounded-md' : ' opacity-0'}
      >
        {children}
        <CloseButton closeModal={closeActive} />
      </div>
    </div>
  );
}

export default Modal;
