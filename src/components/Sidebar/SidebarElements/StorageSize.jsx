import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './StorageSize.css';
import { useGetFileSizeQuery } from '../../../features/file/fileApiSlice';
import { setFileSize } from '../../../features/Global/fileSizeSlice';

function StorageSize() {
  const dispatch = useDispatch();
  const { data: getFileSize } = useGetFileSizeQuery();
  //   console.log(data);
  useEffect(() => {
    console.log(getFileSize);
    dispatch(setFileSize(getFileSize?.fileSize));
  }, [getFileSize]);

  const fileSize = useSelector((state) => state.fileSize?.fileSize);
  const kb = fileSize / 1024;
  let mb = Math.floor(kb / 1024);
  let percentage = Math.ceil(mb / (1024 * 100));
  // if (typeof percentage !== 'number' && typeof mb !== 'number') {
  //   console.log(mb);
  //   mb = 0;
  //   percentage = 0;
  // }
  return (
    <div>
      <p className="text-gray-500  dark:text-gray-400">
        {mb}
        Mb / 1 GB Used
      </p>
      <Box sx={{ width: '90%' }} className="mt-3">
        <LinearProgress variant="buffer" value={percentage} valueBuffer={0} />
      </Box>
      <p className="mt-3 text-gray-500  dark:text-gray-400">
        { percentage}
        % Used
      </p>
    </div>

  );
}

export default StorageSize;
