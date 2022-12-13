import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function FolderTree() {
  return (
    <div className="ml-10">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MyDrive
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Folder1
        </Link>
        <Typography color="text.primary">File</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default FolderTree;
