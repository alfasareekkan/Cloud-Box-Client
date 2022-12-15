/* eslint-disable react/prop-types */
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

function CloseButton({ closeModal }) {
  return (
    <IoCloseSharp
      className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
      onClick={closeModal}
    />
  );
}

export default CloseButton;
