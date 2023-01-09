import React, { useEffect ,useState} from 'react'
import FileCard2 from '../components/Card/FileCard2'
import { useGetAllFileMutation } from '../features/file/fileApiSlice'

function FilesPages() {
    const [files, setFiles] = useState([])
    const [getAllFile] = useGetAllFileMutation()
    async function getAllFiles() {
        let data =await getAllFile().unwrap();
        setFiles(data);
        console.log(files);
    }
    useEffect(() => {
        getAllFiles()
    },[])
  return (
    <div className="mt-10 ml-5">
      <div className="">
        <p className="text-gray-500 text-lg cursor-pointer dark:text-gray-400">Documents</p>
        <div className=" flex flex-wrap flex-col  items-center  mb-8 sm:flex-row">
          <canvas id="canvas" hidden />
                  <div id="xlsxDiv" className="absolute -z-20" />
                  {
                      files?.map((value) => (
                          <FileCard2 value={value} />
                      ))
                  }
          {/* {
              folder.childFiles?.map((value) => (
                // eslint-disable-next-line no-underscore-dangle

                <FileCard key={value._id} file={value} />
              ))
            } */}

        </div>
      </div>
    </div>
  )
}

export default FilesPages