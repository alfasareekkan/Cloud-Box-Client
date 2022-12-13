import React from 'react';
import { links } from '../../../data/DummyData';

function DashboardILinks() {
  return (
    <>
      {
              links.map((link) => (
                <div key={link.title}>
                  <div className="text-gray-500 text-lg cursor-pointer dark:text-gray-400 m-3 mt-6 flex items-center hover:text-[#9fa2f6]">
                    <p>{link.icon}</p>

                    <p className="ml-3">{link.title}</p>
                  </div>
                </div>
              ))
          }
    </ >
  );
}

export default DashboardILinks;
