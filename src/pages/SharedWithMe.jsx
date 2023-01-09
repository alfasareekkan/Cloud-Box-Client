import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllShareFilesMutation } from '../features/shared/shareFileApiSlice';
import { setChileFiles } from '../features/shared/shareFileSlice';
import { FileCard } from '../components/index';

function SharedWithMe() {
  const [getAllShareFiles] = useGetAllShareFilesMutation()
  const dispatch = useDispatch();
  const childFiles=useSelector((state)=>state.shared.childFiles)
 async function SharedWithMeGET() {
   let data = await getAllShareFiles().unwrap()
   dispatch(setChileFiles(data))
  }
  useEffect(() => {
    SharedWithMeGET()

  },[])
  return (
    <div className="mt-10 ml-5">

      <div className="">
        <p className="text-gray-500 text-lg cursor-pointer dark:text-gray-400">Folders</p>
        <div className="flex flex-wrap flex-col  mb-8 sm:flex-row">
          {/* <Folder folder={ } />
          {folder.childFolders?.map((value) => (
            // eslint-disable-next-line no-underscore-dangle
            <Folder key={value._id} folder={value} />
          ))} */}

        </div>
      </div>
      <div className="">
        <p className="text-gray-500 text-lg cursor-pointer dark:text-gray-400">Documents</p>
        <div className=" flex flex-wrap flex-col  items-center  mb-8 sm:flex-row">
          <canvas id="canvas" hidden />
          <div id="xlsxDiv" className="absolute -z-20" />
          {
              childFiles?.map((value) => (
                // eslint-disable-next-line no-underscore-dangle

                <FileCard key={value._id} file={value} />
              ))
            }

        </div>
      </div>
    </div>
  )
}

export default SharedWithMe