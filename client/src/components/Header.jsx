import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-gray-400 flex items-center w-full lg:w-auto">
        <input
          type="text"
          placeholder="Search type of keywords"
          className="p-2 bg-gray-100 rounded w-full lg:w-auto"
        />
      </div>
      <div className="flex items-center">
        <button
          className="lg:hidden w-8 h-8 bg-gray-200 rounded-full mr-4 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <i className="icon-menu"></i>
        </button>
        <div className="hidden lg:flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
            <i className="icon-bell"></i>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
            <i className="icon-question"></i>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
          <div className="text-gray-600">Laurice</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
