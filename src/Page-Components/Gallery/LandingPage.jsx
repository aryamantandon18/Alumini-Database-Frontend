import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="mt-20 grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <div className="flex w-full divide-x divide-gray-800">
        <NavLink
          to="/Albums"
          className={({ isActive }) =>
            `align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-[#518DAF]  text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-r-none border-r-0 ${
              isActive ? 'bg-[#61a7cf]' : ''
            }`
          }
        >
          Albums
        </NavLink>

        <NavLink
          to="/Videos"
          className={({ isActive }) =>
            `align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-[#518DAF] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-r-none border-r-0 rounded-l-none ${
              isActive ? 'bg-[#61a7cf]' : ''
            }`
          }
        >
          Videos
        </NavLink>

        <NavLink
          to="/AllPhotos"
          className={({ isActive }) =>
            `align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-[#518DAF]  text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-l-none ${
              isActive ? 'bg-[#61a7cf]' : ''
            }`
          }
        >
          All Photos
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
