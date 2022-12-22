import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { BsFillFolderFill } from 'react-icons/bs';
import { useSelector,useDispatch } from 'react-redux';
import { updatePath } from '../../features/folder/folderSlice';

export default function Folder(props) {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleClick = () => {
    dispatch(updatePath(props.folder))
    navigate(`/dashboard/v1/${props?.folder._id}`,{replace:true})
  }
  return (
    <div onClick={handleClick} className="ml-5 bg-[#ffffff] border-1 mt-5 h-10 w-11/12 rounded-md hover:bg-gray-100 md:w-4/12  lg:w-2/12 px-2  ">
      <div className="flex ml-3 justify-start items-center">
        <BsFillFolderFill className="text-2xl text-[#9fa2f6] mt-2" />
        <p className="ml-4 text-[#5e6268] text-xs font-semibold mt-1">{props?.folder.folderName}</p>

      </div>
    </div>
  );
}
