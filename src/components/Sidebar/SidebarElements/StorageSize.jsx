import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './StorageSize.css';

function StorageSize() {
  return (
    <div >
      <p className='text-gray-500  dark:text-gray-400'>4 Mb / 1 GB Used</p>
      <Box sx={{ width: '90%' }} className='mt-3'>
        <LinearProgress variant="buffer" value={55} valueBuffer={78} />
          </Box>
          <p className='mt-3 text-gray-500  dark:text-gray-400'>75% Full - 3.9 GB Free</p>
    </div>

  );
}

export default StorageSize;
