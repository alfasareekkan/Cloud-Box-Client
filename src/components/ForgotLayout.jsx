import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Toaster }  from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

// import warning from '../assets/warning.svg';
import warning from '../assets/warning.svg';


function ForgotLayout({handleChange,heading,paragraph,handleSubmit,value,label,isLoading}) {
  return (
      <div className="w-full h-screen p-3 sm:p-5 md:p-7 bg-[rgb(246, 246, 246)]">
           <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="relative w-full h-28 md:h-56 bg-[#9fa2f6] sm:h-36 rounded-lg">
        <div className="absolute w-96 h-96 bg-white shadow-lg left-1/2  top-1/2 -translate-x-[50%]  rounded-lg">
          <div className="flex flex-col justify-center items-center gap-5   ">
            <img src={warning} alt="" className="h-20 w-20 mt-4" />
                      <h1 className="text-2xl font-medium">{heading}</h1>
                      <p className="-mt-4 text-sm text-gray-500">{ paragraph}</p>
                      <TextField value={value} id="outlined-basic" label={label} variant="outlined" onChange={handleChange} />
                      {
                          isLoading ? (<button className="px-4 py-2 cursor-pointer  rounded-md border-2 border-[#9fa2f6] bg-[#9fa2f6] text-white transition-all" disabled>      <CircularProgress size={26} color="inherit" />
                          </button>) : (
                            <button className="px-4 py-2 cursor-pointer  rounded-md border-2 border-[#9fa2f6] bg-[#9fa2f6] text-white transition-all" onClick={handleSubmit}>Submit</button>
                          )
                      }
            
            <Link to="/login"  className="text-gray-400 text-sm">Back to login</Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotLayout;
