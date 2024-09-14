import React, { useState, useEffect, useRef } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="">
      <div className="p-4  text-black">
        <button onClick={toggleSidebar}>
          <svg
            className="w-6 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-16 inset-y-0 left-0 z-30 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="w-64 h-full bg-white shadow-md">
          <div className="p-4 mt-6">
            <input
              type="text"
              placeholder="Find a view"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />
            <div className="space-y-2">
              <div className="flex items-center px-4 py-2 text-blue-700 bg-blue-100 rounded-md cursor-pointer">
                <span className="mr-2">📄</span> All alumni
              </div>
              <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                <span className="mr-2">📄</span> Alumni by graduating class
              </div>
              <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                <span className="mr-2">📄</span> Alumni by major
              </div>
              <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                <span className="mr-2">📄</span> Alumni info form
              </div>
              <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                <span className="mr-2">📄</span> Alumni gallery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
