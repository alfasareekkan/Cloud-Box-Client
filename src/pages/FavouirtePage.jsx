import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavourite } from '../features/favourite/favouriteSlice';
import FileCard2 from '../components/Card/FileCard2';
import { useGetAllFavoriteMutation } from '../features/file/fileApiSlice';

function FavouritePage() {
  const [getAllFavorite] = useGetAllFavoriteMutation();
  const dispatch = useDispatch();
  const childFiles = useSelector((state) => state.favourite.favouriteFiles);
  async function favouriteFiles() {
    const data = await getAllFavorite().unwrap();
    dispatch(setFavourite(data));
  }
  useEffect(() => {
    favouriteFiles();
  }, []);
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

export default FavouritePage;
