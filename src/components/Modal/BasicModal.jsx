import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { closeFolderShare } from '../../features/Global/modalSlice';
import { useIsUserShareFolderMutation } from '../../features/folder/folderApiSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const folderShare = useSelector((state) => state.modal.shareFolder);
  const modalId = useSelector((state) => state.modal.shareFolderId);
  const [isUserShareFolder, { isLoading }] = useIsUserShareFolderMutation();
  const inputRef = useRef();
  //   const [open, setOpen] = React.useState(false);
  const handleClose = () => dispatch(closeFolderShare());
  useEffect(() => {
    // inputRef.current.focus();
    // inputRef.current.select();
  }, [folderShare]);

  const handleSubmit = async () => {
    console.log(inputRef.tar);
    try {
      const result = await isUserShareFolder({
          email: inputRef.current.value, folderId: modalId,
      }).unwrap();
        console.log(result);
        if (result) {
            setError("");
            dispatch(closeFolderShare())
        }
    } catch (error) {
      setError('user not exist');
    }
  };
  return (
    <div>
      <Modal
        open={folderShare}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex flex-col mx-5 my-6">
              <h1 className="text-xl font-medium text-gray-900">Add Users</h1>
              <input type="text" ref={inputRef} className="border-blue-600 mt-3 p-2 h-10 " autoFocus />
              <p>{error }</p>
              <div className="flex justify-end mt-2">
                <Button
                  onClick={() => {
                    dispatch(closeFolderShare());
                    setError('');
                  }}
                  className="mr-3 text-gray-900"
                >
                  Cancel

                </Button>
                <Button className="text-blue-600" onClick={handleSubmit}>Add</Button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
