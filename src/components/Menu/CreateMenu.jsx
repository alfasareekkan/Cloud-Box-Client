/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { AiOutlineFolderAdd, AiOutlineFileAdd } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { openFolderCreation } from '../../features/Global/modalSlice';

function CreateMenu() {
  const m = useSelector((state) => state.modal.folderCreationModal);
  const dispatch = useDispatch();
  const handleCreateFolder = () => {
    dispatch(openFolderCreation());
    console.log('adfa');
    console.log(m);
  };
  return (
    <div className="absolute top-[150px] left-[20px] z-20  w-10/12 bg-white  shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col text-base">
        <div
          className="py-3 px-4 border-b-1 text-gray-500 hover:bg-[#f2f3f2] hover:bg-opacity-40 cursor-pointer flex"
          onClick={handleCreateFolder}
        >
          <AiOutlineFolderAdd className="text-2xl" />
          <p className="ml-3">
            New Folder
          </p>
        </div>
        <div className="py-3 px-4 border-b-1 text-gray-500 hover:bg-[#f2f3f2] hover:bg-opacity-40 cursor-pointer flex">
          <AiOutlineFileAdd className="text-2xl" />
          <p className="ml-3">
            Upload Files
          </p>
        </div>

      </div>
    </div>
  );
}

export default CreateMenu;
