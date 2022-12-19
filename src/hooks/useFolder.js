/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFolder, updateFolder } from '../features/folder/folderSlice';
import { useGetFolderMutation } from '../features/folder/folderApiSlice';

const ROOT_FOLDER = { title: 'Root', folderId: null };

export function useFolder(folderId = null, folder = null) {
  const dispatch = useDispatch();
  const folderState = useSelector((state) => state.folder);
  const [getFolder, { isLoading }] = useGetFolderMutation();
  // eslint-disable-next-line no-shadow
  async function getOneFolder(folderId) {
    let data = await getFolder({ folderId }).unwrap();
    console.log(data);
  }
  useEffect(() => {
    dispatch(selectFolder(folderId, folder));
  }, [folder, folderId]);

  useEffect(() => {
    if (folderId == null) {
     return dispatch(updateFolder(ROOT_FOLDER));
    }
    getOneFolder(folderId);
  }, [folderId]);

  return folderState;
}
