import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import Routers from './routers/Routers';
import { Footer } from './components/index';
import { setCredentials } from './features/auth/authSlice';
import FolderModal from './components/Modal/FolderModal';
import FileModal from './components/Modal/FileModal';
import { useGetRefreshTokenMutation } from './features/auth/authApiSlice';
// import ShareModal from './components/Modal/ShareModal';
// import {useFolder} from './hooks/useFolder'

function App() {
  // const folderState = useFolder()
  // console.log(folderState);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cookie = new Cookies();
  const userToken = localStorage.getItem('refreshToken');
  const [getRefreshToken] = useGetRefreshTokenMutation();

  function someRequest() { // Simulates a request; makes a "promise" that'll run for 2.5 seconds
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(() => resolve(), 100));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector('.loader-container');
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
    dispatch(setCredentials({ token: userToken }));
  }, []);
  async function getToken() {
   try {
     const refreshToken = await getRefreshToken().unwrap()
     console.log(refreshToken);
     localStorage.setItem('refreshToken', refreshToken.refreshToken);
     console.log(refreshToken);
    dispatch(setCredentials({ token: refreshToken }));

    
   } catch (error) {
     localStorage.removeItem('refreshToken');
     localStorage.removeItem('accessToken');
   }
}
  useEffect(() => {
    getToken()
  },[])
  setInterval(() => {
    getToken();
  }, 60000 * 4);

  if (isLoading) { //
    return null;
  }
  return (
    <div >
      <FolderModal />
      <FileModal />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
