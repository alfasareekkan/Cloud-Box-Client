import React from 'react';
import { getObjectUrl } from '../../features/aws/s3Bucket';

function FileCard(props) {
  const handleOpen = async()=>{
    // const url = await getObjectUrl(props.AWSKey);
    // window.open(url, '_blank');

  }

  return (
    <div onClick={handleOpen} className="bg-transparent w-2/12 ml-5 h-60 flex mt-5  flex-col justify-center items-center md:w-4/12  lg:w-2/12 px-2">
        <img src={props.file.cludinaryUrl} className="w-full md:h-25 md:w-8/12 aspect-video object-cover object-top " alt="PDF" />
      <p className="mt-1 text-center text-[#5e6268] text-xs font-semibold ">{ props.file.fileName}</p>

    </div>
  );
}

// #f6f8fa
export default FileCard;
