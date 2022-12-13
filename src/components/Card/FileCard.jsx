import React from 'react';
import pdf from '../../assets/pdf.png';

function FileCard() {
  return (
    <div className="bg-white w-2/12 ml-5 h-60 flex mt-5  flex-col justify-center items-center md:w-4/12  lg:w-2/12 px-2 ">
      <div className="bg-[#f6f8fa] h-48 w-44     ">
        <img src={pdf} className=" w-10/12 h-30 mx-3 my-5 md:h-25 md:w-8/12 " alt="PDF" />
      </div>
      <p className="mt-1">file name</p>

    </div>
  );
}

// #f6f8fa
export default FileCard;
