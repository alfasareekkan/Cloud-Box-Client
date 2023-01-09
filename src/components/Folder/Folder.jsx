/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillFolderFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { styled, alpha } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { insertPath } from '../../features/folder/folderSlice';
import { openFolderShare, setShareFolderModalId } from '../../features/Global/modalSlice';
// import ShareModal from '../Modal/ShareModal';
import BasicModal from '../Modal/BasicModal';

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

export default function Folder(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleRightClick = (event) => {
    event.preventDefault(); // This will prevent the default right-click menu from appearing
    if (anchorEl) {
    setAnchorEl(null);
      
    } else {
      setAnchorEl(event.currentTarget);
      dispatch(setShareFolderModalId(props.folder._id))
      
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(insertPath(props.folder));
    navigate(`/dashboard/v1/${props?.folder._id}`, { replace: true });
  };
  // const handleRightClick = (event) => {
  //   // Do something when the element is right-clicked
  //   event.preventDefault(); // This will prevent the default right-click menu from appearing
  //   alert('hi');
  // };
  const handleShare = (event) => {
    // event.preventDefault()
    // setAnchorEl(event.currentTarget);
    dispatch(openFolderShare())
  }
  return (
    
    <div  className="ml-5 bg-[#ffffff] border-1 mt-5 h-10 w-11/12 rounded-md hover:bg-gray-100 md:w-4/12  lg:w-2/12 px-2  " onContextMenu={handleRightClick}>
      <div onClick={handleClick} className="flex ml-3 justify-start items-center">
        <BsFillFolderFill className="text-2xl text-[#9fa2f6] mt-2" />
        <p className="ml-4 text-[#5e6268] text-xs font-semibold mt-1">{props?.folder.folderName}</p>

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
            Edit
          </MenuItem>
          <MenuItem onClick={handleShare} disableRipple>
            <FileCopyIcon />
            Share
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <ArchiveIcon />
            Archive
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
