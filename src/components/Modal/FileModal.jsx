/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileUploader } from 'react-drag-drop-files';
import pdfjsLib,{getDocument} from "pdfjs-dist";


import Modal from './Modal';
import { closeFileCreation } from '../../features/Global/modalSlice';
import { useUploadFileMutation } from '../../features/file/fileApiSlice';
import {createPreviewImage } from '../../features/file/previewImage';

function FileModal() {
  const dispatch = useDispatch();
  const fileOverLay = useSelector((state) => state.modal.fileCreationModal);
  const [file, setFile] = useState(null);
  const [uploadedFile, { isLoading }] = useUploadFileMutation();
  const handleChange = (event) => {
    setFile(event);
  };
  const handleModalCancel = () => {
    dispatch(closeFileCreation());
    setFile(null);
  };
  const handleUpload = async (e) => {
    console.log(file);
    const previewImage = await createPreviewImage(file, e);
    console.log(previewImage);
    const reader = new FileReader();
    reader.onload = async () => {
      const fileContents = reader.result;
      const typedArray = new Uint8Array(fileContents);
      // const r = await uploadedFile({
      //   fileName: file.name,
      //   fileContents: typedArray,
      //   previewImage,
      // }).unwrap();
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
