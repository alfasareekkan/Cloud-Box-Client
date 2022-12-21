/* eslint-disable */
import React,{ useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeFolderCreation } from '../../features/Global/modalSlice'
import { useCreateFolderMutation } from '../../features/folder/folderApiSlice'
import { updateChildFolders } from '../../features/folder/folderSlice'
import {setCreateMenu} from '../../features/Global/menuSlice'
// import {useFolder} from '../../hooks/useFolder'


import Modal from './Modal'
import PreLoader from '../PreLoader/PreLoader'

function FolderModal() {
    const inputRef=useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.token)
    const folderCreationOverlay = useSelector((state) => state.modal.folderCreationModal)
    const folder=useSelector((state)=>state.folder)
    const [createFolder,{isLoading}]=useCreateFolderMutation()
    const handleSubmit = async () => {
      let res=  await createFolder({
            "folderName":inputRef.current.value,
            "userId":user,
          "folderId": folder.folderId,
            "level":folder.level
          
      }).unwrap()
        dispatch(updateChildFolders(res))
        dispatch(closeFolderCreation())
        dispatch(setCreateMenu(false))
    }
    const content = isLoading ? (
        <PreLoader/>
    ):(
      <Modal id="folderCreationContainer" active={folderCreationOverlay} closeActive={()=>{dispatch(closeFolderCreation())}}> 
          <div className='flex flex-col mx-5 my-6'>
              <h1 className='text-xl font-medium text-gray-900'>New Folder</h1>
              <input ref={inputRef} type="text" name="" id="" className='border-blue-600 mt-3 p-2 h-10 ' defaultValue='Untitled folder'/>
              <div className='flex justify-end mt-2'>
                  <button onClick={()=>dispatch(closeFolderCreation())} className='mr-3 text-gray-900'>Cancel</button>
                  <button className='text-blue-600' onClick={handleSubmit}>Create</button>
                  
              </div>
              
          </div>
    </ Modal>
    )
    return content
}

export default FolderModal