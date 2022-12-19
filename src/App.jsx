import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import Routers from './routers/Routers';
import { Footer } from './components/index';
import { setCredentials } from './features/auth/authSlice';
import FolderModal from './components/Modal/FolderModal';
// import {useFolder} from './hooks/useFolder'

function App() {
  // const folderState = useFolder()
  // console.log(folderState);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cookie = new Cookies();
  const userToken = cookie.get('jwt');

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

  if (isLoading) { //
    return null;
  }
  return (
    <div>
      <FolderModal />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
