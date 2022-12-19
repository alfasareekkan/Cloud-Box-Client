/* eslint-disable */
import React,{ useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeFolderCreation } from '../../features/Global/modalSlice'
import { useCreateFolderMutation } from '../../features/folder/folderApiSlice'
import {useFolder} from '../../hooks/useFolder'


import Modal from './Modal'

function FolderModal() {
    const inputRef=useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    const dispatch = useDispatch()
    const folderCreationOverlay = useSelector((state) => state.modal.folderCreationModal)
    const folderId=useSelector((state)=>state.folder.folderId)
    const [createFolder,{isLoading}]=useCreateFolderMutation()
    const handleSubmit =async () => {
      let res=  await createFolder({
            "folderName":inputRef.current.value,
            "userId":"639ab2ecbcf3d43c3862d775",
            "folderId":folderId
          
      }).unwrap()
   
 }
  return (
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
}

export default FolderModal