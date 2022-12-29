/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileUploader } from 'react-drag-drop-files';

import Modal from './Modal';
import { closeFileCreation } from '../../features/Global/modalSlice';
import { useUploadFileMutation } from '../../features/file/fileApiSlice';

function FileModal() {
  const dispatch = useDispatch();
  const fileOverLay = useSelector((state) => state.modal.fileCreationModal);
  const [file, setFile] = useState(null);
  const [uploadedFile, { isLoading }] = useUploadFileMutation();
  const handleChange = (event) => {
    // console.log(event);
    // if (event.target.files.length > 0) {
    //   // Set the file in the state
    //   console.log('😒😒');
    //   setFile(event.target.files[0]);
    // }
    setFile(event);
  };
  const handleModalCancel = () => {
    dispatch(closeFileCreation());
    setFile(null);
  };
  const handleUpload = () => {
    console.log(file);
    const reader = new FileReader();
    console.log(reader);
    reader.onload = async () => {
      const fileContents = reader.result;
      const typedArray = new Uint8Array(fileContents);
      // body: JSON.stringify({
      //     fileName: file.name,
      //     fileContents: typedArray
      //   }),
      console.log(typedArray);
      const r = await uploadedFile({
        fileName: file.name,
        fileContents: typedArray,
      }).unwrap();
    };
    reader.readAsArrayBuffer(file);
  };
  return (
    <Modal id="fileUploadModal" active={fileOverLay} closeActive={() => dispatch(closeFileCreation())}>
      <div className="flex flex-col mx-5 my-6">
        <FileUploader handleChange={handleChange} name="file">
          <div className="outline-dashed  outline-gray-500 outline-4  rounded-md h-20 bg-gray-300 flex justify-center items-center ">

            <p>{file ? `File name: ${file.name}` : 'Upload or Drop here'}</p>

          </div>
        </FileUploader>
        {/* <input type="file"  onChange={handleChange}/> */}
        <div className="flex justify-end mt-4">
          <button className="mr-3 text-gray-900" onClick={handleModalCancel}>Cancel</button>
          <button className="text-blue-600" onClick={handleUpload}>Upload</button>

        </div>
        {/* <p>{file ? `File name: ${file[0].name}` : 'no files uploaded yet'}</p> */}
      </div>

    </Modal>
  );
}

export default FileModal;
