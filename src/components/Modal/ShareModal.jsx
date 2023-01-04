// import React, { useState, useRef, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Modal from './Modal';
// import { closeFolderShare } from '../../features/Global/modalSlice';

// function ShareModal() {
//     const inputRef=useRef()
//     const [email, setEmail] = useState('');
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     }
//   const dispatch = useDispatch();
//     const folderShare = useSelector((state) => state.modal.shareFolder);
//     const modalId = useSelector((state) => state.modal.shareFolderId);
//     console.log(email);
//     useEffect(() => {
//         inputRef.current.focus()
//         inputRef.current.select()
// },[folderShare])
//   return (
//     <Modal id="shareModal" active={folderShare} closeActive={() => dispatch(closeFolderShare())}>
//       <div className="flex flex-col mx-5 my-6">
//               <h1 className="text-xl font-medium text-gray-900">Add Users</h1>
//               <input type="text" ref={inputRef}   className="border-blue-600 mt-3 p-2 h-10 "  autoFocus defaultValue='Untitled folder'/>
//         <div className="flex justify-end mt-2">
//           <button onClick={() => dispatch(closeFolderShare())} className="mr-3 text-gray-900">Cancel</button>
//           <button className="text-blue-600">Create</button>

//         </div>

//       </div>
//     </Modal>
//   );
// }

// export default ShareModal;
