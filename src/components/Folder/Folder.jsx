import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillFolderFill } from 'react-icons/bs';

export default function Folder(props) {
  return (
    <Link to={ `/dashboard/v1/${props?.folder._id}`} className="ml-5 bg-[#ffffff] border-1 mt-5 h-10 w-11/12 rounded-md hover:bg-gray-100 md:w-4/12  lg:w-2/12 px-2  ">
      <div className="flex ml-3 justify-start items-center">
        <BsFillFolderFill className="text-2xl text-[#9fa2f6] mt-2" />
        <p className="ml-4 text-[#5e6268] text-xs font-semibold mt-1">{props?.folder.folderName}</p>

      </div>
    </Link>
  );
}
