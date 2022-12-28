import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileUploader } from 'react-drag-drop-files';

import Modal from './Modal';
import { closeFileCreation } from '../../features/Global/modalSlice';

function FileModal() {
  const dispatch = useDispatch();
  const fileOverLay = useSelector((state) => state.modal.fileCreationModal);
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <Modal id="fileUploadModal" active={fileOverLay} closeActive={() => dispatch(closeFileCreation())}>
      <div className="flex flex-col mx-5 my-6">
              <FileUploader handleChange={handleChange} name="file" multiple>
                  <div className="bg-red-600">
                      <p>here</p>
                  </div>
        </FileUploader>
        <p>{file ? `File name: ${file[0].name}` : 'no files uploaded yet'}</p>
      </div>

    </Modal>
  );
}

export default FileModal;
