import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import unnamed from '../assets/unnamed.jpg';
import logoText from '../assets/logoText.png'
import cloud from '../assets/cloud.png'
import { textAlign } from "@mui/system";


function HomePage() {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row w-full md:h-fit">
        <div className="w-full h-screen mt-10 md:h-fit">
          <div className="flex flex-col ml-20 mt-20">
            <h1 className="text-5xl mt-10 font-medium">
              Easy and secure access to your content
            </h1>
            <h1 className="text-lg font-medium text-[#5F6368] mt-5" >
              Store, share, and collaborate on files and folders from your
              mobile device, tablet, or computer
            </h1>
            <div className="flex mt-5 sm:">
                         
                          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-[#8F92F6] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#8F92F6] focus:outline-none focus:ring-2 focus:ring-[#8F92F6] focus:ring-offset-2"
          >
           Try Box for Work
           
          </button>
                          <div className="ml-5">
                          
                              <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
           
            GoTo Box
          </button>
                          </div>
                          
             
                      </div>
                      <div className="mt-5 flex flex-col md:flex-row">
                          <h1>Don't have an account?</h1>
                          <Link className="ml-5 text-blue-500 font-semibold" to={'/signup'}>Sign up at no cost</Link>
                      </div>
          </div>
        </div>
              <div className="w-full h-screen mt-12  bg-white">
                  <div className="items-center mt-7 mr-5">
                  <img src={unnamed}  />
                      
                  </div>
        </div>
          </div>
          <div className="h-fit bg-[#8F93F6]">
              <div className="flex flex-col items-center" >
                  <div className="flex flex-col items-center mt-10">
                      <img src={logoText} alt="" className="w-20 h-20"/>
                      <h1 className="text-white text-4xl font-semibold">
                          Cloud Box
                      </h1>
                  </div>
                  {/* <div className="items-center"> */}
                      <img className="items-center w-9/12"src={cloud} alt="" />
                  {/* </div> */}
                  
              </div>
              
          </div>
    </Fragment>
  );
}

export default HomePage;
