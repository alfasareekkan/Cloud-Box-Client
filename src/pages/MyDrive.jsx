import React from 'react';
import { Folder, FileCard } from '../components/index';

function MyDrive() {
  return (
    <div className="mt-10 ml-5">

      <div className="">
        <p className="text-gray-500 text-lg cursor-pointer dark:text-gray-400">Folders</p>
        <div className="flex flex-wrap flex-col  mb-8 sm:flex-row">
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />

          <Folder />

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
}

export default MyDrive;
