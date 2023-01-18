import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrashFile } from '../features/trash/trashFileSlice';
import FileCard2 from '../components/Card/FileCard2';
import { useGetTrashFileMutation } from '../features/trash/trashFileApiSlice';

function TrashPage() {
  const [getTrashFile] = useGetTrashFileMutation()
  const dispatch = useDispatch();
    const childFiles=useSelector((state)=>state.trash.childFiles)
   async function SharedWithMeGET() {
       const data = await getTrashFile().unwrap();
     dispatch(setTrashFile(data))
    }
    useEffect(() => {
      SharedWithMeGET()

    },[])
  return (
    <div className="mt-10 ml-5">

      {/* <div className="">
        <p className="text-gray-500 text-lg cursor-pointer dark:text-gray-400">Folders</p>
        <div className="flex flex-wrap flex-col  mb-8 sm:flex-row">
          {/* <Folder folder={ } />
          {folder.childFolders?.map((value) => (
            // eslint-disable-next-line no-underscore-dangle
            <Folder key={value._id} folder={value} />
          ))} */}

      {/* </div> */}
      {/* </div>   */}
      <div className="">
        <p className="text-gray-500 text-lg cursor-pointer dark:text-gray-400">Trash</p>
        <div className=" flex flex-wrap flex-col  items-center  mb-8 sm:flex-row">
          <div id="xlsxDiv" className="absolute -z-20" />
          {
              childFiles?.map((value) => (
                // eslint-disable-next-line no-underscore-dangle

                <FileCard2 key={value._id} value={value} />
              ))
            }

        </div>
      </div>
    </div>
  );
}

export default TrashPage;
