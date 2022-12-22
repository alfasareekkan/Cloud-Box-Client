/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Folder, FileCard } from '../components/index';
import { useGetAllFoldersMutation } from '../features/folder/folderApiSlice';
import { insertChildFolders, updateFolder } from '../features/folder/folderSlice';
import PreLoader from '../components/PreLoader/PreLoader';

function MyDrive() {
  const folder = useSelector((state) => state.folder);
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const [getAllFolders, { isLoading }] = useGetAllFoldersMutation();
  const user = useSelector((state) => state.auth.token);
  async function fetchFolders() {
    const folders = await getAllFolders({
      user,
      folderId: folder.folderId,
      level: folder.level,
    }).unwrap();

    dispatch(insertChildFolders(folders));
  }
  useEffect(() => {
    if (id) {
      // let subFolder = folder.childFolders.filter((val) => id === val._id);
      for (let i = 0; i < folder.childFolders.length; i++) {
        if (id === folder.childFolders[i]._id) {
          dispatch(updateFolder(folder.childFolders[i]));
          break;
         }
       }
    }
  },[id])
  useEffect(() => {
    
    fetchFolders();
  }, [folder.folderId]);

  const content = isLoading ? (
    <PreLoader />
  ) : (
    <div className="mt-10 ml-5">

      <div className="">
        <p className="text-gray-500 text-lg cursor-pointer dark:text-gray-400">Folders</p>
        <div className="flex flex-wrap flex-col  mb-8 sm:flex-row">
          {/* <Folder folder={ } /> */}
          {folder.childFolders?.map((value) => (
            // eslint-disable-next-line no-underscore-dangle
            <Folder key={value._id} folder={value} />
          ))}

        </div>
      </div>
      <div className="">
        <p className="text-gray-500 text-lg cursor-pointer dark:text-gray-400">Documents</p>
        <div className=" flex flex-wrap flex-col  items-center  mb-8 sm:flex-row">
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />

          <FileCard />

        </div>
      </div>
    </div>
  );
  return content;
}

export default MyDrive;
