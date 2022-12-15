/* eslint-disable */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {closeFolderCreation} from '../../features/Global/modalSlice'


import Modal from './Modal'

function FolderModal() {
    const dispatch = useDispatch()
    const folderCreationOverlay = useSelector((state) => state.modal.folderCreationModal)
    console.log(folderCreationOverlay);
  return (
      <Modal id="folderCreationContainer" active={folderCreationOverlay} closeActive={()=>{dispatch(closeFolderCreation())}}> 
          <div></div>
    </ Modal>
  )
}

export default FolderModal