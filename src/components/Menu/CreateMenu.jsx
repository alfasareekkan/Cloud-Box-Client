/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { AiOutlineFolderAdd, AiOutlineFileAdd } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { openFolderCreation,openFileCreation } from '../../features/Global/modalSlice';

function CreateMenu() {
  const [file, setFile] = useState(null);
  const handleSubmit = () => {
    console.log(file);
    const reader = new FileReader();
    console.log(reader);
    reader.onload = () => {
      const fileContents = reader.result;
      console.log(fileContents);
      const typedArray = new Uint8Array(fileContents);
      console.log(typedArray);

    }
    reader.readAsText(file);
  };
  const handleFileChange = (event) => {
    // const selectedFile = event.target.files[0];
    if (event.target.files.length > 0) {
      // Set the file in the state
      console.log('😒😒');
      setFile(event.target.files[0]);
      // const reader = new FileReader();
      // console.log(reader);
      // reader.onload = () => {
      //   const fileContents = reader.result;
      //   console.log(fileContents);
      //   const typedArray = new Uint8Array(fileContents);
      //   console.log(typedArray);
      // };
      // reader.readAsArrayBuffer(file);
    }
  };
  const dispatch = useDispatch();
  const handleCreateFolder = () => {
    dispatch(openFolderCreation());
  };
  const handleFileCreation = () => {
    console.log("sdfasf");
    dispatch(openFileCreation())
  }
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
        <div className="py-3 px-4 border-b-1 text-gray-500 hover:bg-[#f2f3f2] hover:bg-opacity-40 cursor-pointer flex" onClick={handleFileCreation}>
          <AiOutlineFileAdd className="text-2xl" />
          {/* <input type="file" hidden id="uploadFile" onChange={handleFileChange} onSelect={handleSubmit} /> */}
          {/* <label className="ml-3" htmlFor="uploadFile"> Upload file</label> */}
          <span className="ml-3"> Upload file</span>
        </div>

      </div>
    </div>
  );
}

export default CreateMenu;
