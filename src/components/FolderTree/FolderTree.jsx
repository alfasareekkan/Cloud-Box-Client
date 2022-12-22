import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function FolderTree() {
  const paths = useSelector((state) => state.folder.path);
  return (
    <div className="ml-10">
      <Breadcrumbs aria-label="breadcrumb">
        {paths.map((path) => (
          <Link underline="hover" color="inherit" to={`/dashboard/v1/${path.id}`}>
            {path.path}
          </Link>
        ))}

        <Typography color="text.primary">File</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default FolderTree;
