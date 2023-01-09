import React from 'react';
import { useGetFileMutation } from '../../features/file/fileApiSlice';
import { getObjectUrl } from '../../features/aws/s3Bucket';

function FileCard(props) {
  const token = localStorage.getItem('refreshToken');
  const [getFile] = useGetFileMutation();
  const handleOpen = async () => {
    console.log(props.file.AWSKey);

    const data = await getFile({ key: props.file.AWSKey }).unwrap();
    // const file = new Blob(data.Body.data, { type: props.file.fileType });
    // const fileUrl = URL.createObjectURL(file);
    const imageUrl = data.url.split('?')[0]
    console.log(data);
    // const data = await fetch('http://localhost:4007/files/get-file', {
    //   method: 'POST',
    //   body: JSON.stringify(props.file.AWSKey),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'refreshAuthorization', `Bearer ${token}
    //   },
    // });  
    // const url = await getObjectUrl(props.file.AWSKey,props.file.AWSBucket);
    window.open(imageUrl, '_blank');
    // console.log(url);
  };

  return (
    <div onClick={handleOpen} className="bg-transparent w-2/12 ml-5 h-60 flex mt-5  flex-col justify-center items-center md:w-4/12  lg:w-2/12 px-2">
      <img src={props.file.cludinaryUrl} className="w-full md:h-25 md:w-8/12 aspect-video object-cover object-top " alt="PDF" />
      <p className="mt-1 text-center text-[#5e6268] text-xs font-semibold ">{ props.file.fileName}</p>

    </div>
  );
}

// #f6f8fa
export default FileCard;
