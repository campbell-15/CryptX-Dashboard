import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-gray-400 flex items-center">
        <input
          type="text"
          placeholder="Search type of keywords"
          className="p-2 bg-gray-100 rounded w-full"
        />
      </div>
      <div className="flex items-center">
        <button
          className="lg:hidden w-8 h-8 bg-gray-200 rounded-full mr-4 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <i className="icon-menu"></i>
        </button>
        <div className="w-8 h-8 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
          <i className="icon-bell"></i>
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
          <i className="icon-settings"></i>
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-full mr-4"></div>
        <div className="font-bold">Laurice</div>
      </div>
    </div>
  );
};

export default Header;
