import React from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setCreateMenu } from '../../../features/Global/menuSlice';
import { useFolder} from '../../../hooks/useFolder';

function CreateButton() {
  const dispatch=useDispatch()
  const createMenu = useSelector((state) => state.createMenu.createMenu);
  const clickHandler = () => {
    dispatch(setCreateMenu(!createMenu));
  };
  const folderState = useFolder('639abaa0dd042441f67912a5')
  console.log(folderState);
  return (
    <div>
      <button type="button" className="bg-[#f2f3f2] w-11/12 h-10 rounded-md flex justify-center items-center" onClick={clickHandler}>
        <span className=""><MdAdd /></span>
        <span className=" ml-2 text-lg">Create new</span>
      </button>
    </div>
  );
}

export default CreateButton;
