/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { updatePath } from '../../features/folder/folderSlice';

function FolderTree() {
  const dispatch = useDispatch();
  const paths = useSelector((state) => state.folder.path);
  const navigate = useNavigate();
  const handleClick = (path) => {
    dispatch(updatePath(path));
    navigate(`/dashboard/v1/${path.id}`);
  };
  return (
    <div className="ml-10">
      <Breadcrumbs aria-label="breadcrumb">
        {paths.map((path) => (
          <p key={path.path} className="cursor-pointer" onClick={() => handleClick(path)} color="inherit">
            {path.path}
          </p>
        ))}

        {/* <Typography color="text.primary">File</Typography> */}
      </Breadcrumbs>
    </div>
  );
}

export default FolderTree;
