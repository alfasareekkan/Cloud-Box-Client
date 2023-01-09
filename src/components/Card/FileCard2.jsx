import React from 'react';


export default function FileCard2({value}) {
  return (
    <div className="bg-transparent w-2/12 ml-5 h-60 flex mt-5  flex-col justify-center items-center md:w-4/12  lg:w-2/12 px-2" >
    <div  >
        <img
          src={value?.cludinaryUrl}
          className="w-full md:h-25 md:w-8/12 aspect-video object-cover object-top " alt="PDF" />
        <p className="mt-1 text-center text-[#5e6268] text-xs font-semibold ">
         {value?.fileName}
           
        </p>
        </div>
        </div>
  )
}
