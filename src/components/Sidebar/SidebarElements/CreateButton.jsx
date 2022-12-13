import React from 'react';
import { MdAdd } from 'react-icons/md';

function CreateButton() {
  return (
    <div>
      <button type="button" className="bg-[#f2f3f2] w-11/12 h-10 rounded-md flex justify-center items-center">
        <span className=""><MdAdd /></span>
        <span className=" ml-2 text-lg">Create new</span>
      </button>
    </div>
  );
}

export default CreateButton;
