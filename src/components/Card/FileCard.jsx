import React from 'react';
import { useDispatch } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';

import { styled, alpha } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import GradeIcon from '@mui/icons-material/Grade';
import { openFolderShare, setShareFolderModalId } from '../../features/Global/modalSlice';
import { useGetFileMutation, useDeleteFileMutation,useAddToFavouriteMutation } from '../../features/file/fileApiSlice';
import BasicModal from '../Modal/BasicModal';
import { removeFile } from '../../features/folder/folderSlice';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function FileCard(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deleteFile] = useDeleteFileMutation();
  const [addToFavourite]=useAddToFavouriteMutation()
  const open = Boolean(anchorEl);
  const handleRightClick = (event) => {
    event.preventDefault(); // This will prevent the default right-click menu from appearing
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
      dispatch(setShareFolderModalId(props.file._id));
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [getFile] = useGetFileMutation();
  const handleOpen = async () => {
    const data = await getFile({ key: props.file.AWSKey }).unwrap();
    const imageUrl = data.url.split('?')[0];
    window.open(imageUrl, '_blank');
  };
  const handleShare = (event) => {
    // event.preventDefault()
    // setAnchorEl(event.currentTarget);
    dispatch(openFolderShare());
  };
  const handleDelete = async () => {
    try {
      await deleteFile(props.file._id).unwrap();
      toast.success('File moved to trash');
      dispatch(removeFile(props.file._id));
      setAnchorEl(null);
    } catch (error) {
      toast.error(error.data.message);
      setAnchorEl(null);
    }
  };
  const handleFavourite = async () => { 
     try {
       await addToFavourite(props.file._id).unwrap();
      toast.success('File added to favorites');


     } catch (error) {
      toast.error(error.data.message);
      setAnchorEl(null);
     }
  }
  return (
    <div className="bg-transparent w-2/12 ml-5 h-60 flex mt-5  flex-col justify-center items-center md:w-4/12  lg:w-2/12 px-2">
      <div onClick={handleOpen} onContextMenu={handleRightClick}>
        <img src={props.file.cludinaryUrl} className="w-full md:h-25 md:w-8/12 aspect-video object-cover object-top " alt="PDF" />
        <p className="mt-1 text-center text-[#5e6268] text-xs font-semibold ">{props.file.fileName}</p>
      </div>
      <div>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <EditIcon />
            Rename
          </MenuItem>
          <MenuItem onClick={handleShare} disableRipple>
            <FileCopyIcon />
            Share
          </MenuItem>
          <MenuItem onClick={handleFavourite} disableRipple>
            <GradeIcon />
            Add to Favourite
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleDelete} disableRipple>
            <DeleteIcon />
            Delete
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHorizIcon />
            More
          </MenuItem>
        </StyledMenu>
      </div>
      <BasicModal />

    </div>
  );
}

// #f6f8fa
export default FileCard;
