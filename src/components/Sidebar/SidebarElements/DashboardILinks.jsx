import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../../data/DummyData';

function DashboardILinks() {
  return (
    <>
      {
              links.map((link) => (
                <Link key={link.title} to={link.link}>
                  <div className="text-gray-500 text-lg cursor-pointer dark:text-gray-400 m-3 mt-6 flex items-center hover:text-[#9fa2f6]">
                    <p>{link.icon}</p>

                    <p className="ml-3">{link.title}</p>
                  </div>
                </Link>
              ))
          }
    </ >
  );
}

export default DashboardILinks;
