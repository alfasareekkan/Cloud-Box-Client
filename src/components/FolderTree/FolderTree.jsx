import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePath } from '../../features/folder/folderSlice';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

function FolderTree() {
  const dispatch=useDispatch()
  const paths = useSelector((state) => state.folder.path);
  const navigate=useNavigate()
  const handleClick = (path) => {
    dispatch(updatePath(path))
    navigate(`/dashboard/v1/${path.id}`)
  }
  return (
    <div className="ml-10">
      <Breadcrumbs aria-label="breadcrumb">
        {paths.map((path) => (
          <p onClick={()=>handleClick(path)} color="inherit">
            {path.path}
          </p>
        ))}

        {/* <Typography color="text.primary">File</Typography> */}
      </Breadcrumbs>
    </div>
  );
}

export default FolderTree;
