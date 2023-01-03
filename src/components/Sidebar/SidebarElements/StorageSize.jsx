import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'; 
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './StorageSize.css';
import { useGetFileSizeQuery } from '../../../features/file/fileApiSlice';
import { setFileSize } from '../../../features/Global/fileSizeSlice';

function StorageSize() {
  const dispatch=useDispatch();
  const { data: getFileSize } = useGetFileSizeQuery()
//   console.log(data);
  useEffect(() =>{
    console.log(getFileSize);
    dispatch(setFileSize(getFileSize?.fileSize))
  },[getFileSize])
  
  const fileSize = useSelector((state) => state.fileSize?.fileSize)
  const kb = fileSize / 1024;
  const mb=Math.floor(kb/1024)
  return (
    <div >
      <p className='text-gray-500  dark:text-gray-400'>{mb}Mb / 1 GB Used</p>
      <Box sx={{ width: '90%' }} className='mt-3'>
        <LinearProgress variant="buffer" value={55} valueBuffer={78} />
          </Box>
          {/* <p className='mt-3 text-gray-500  dark:text-gray-400'>75% Full - 3.9 GB Free</p> */}
    </div>

  );
}

export default StorageSize;
