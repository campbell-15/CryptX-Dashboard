import React from "react";
import { Question, Bell, Sms } from "../assets"; // Assuming Sms is the search icon

const Header = ({ toggleSidebar }) => {
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-white">
        <div className="flex items-center w-full lg:w-1/3 relative">
          <input
            type="text"
            placeholder="Search type of keywords"
            className="p-2 bg-gray-100 rounded-full w-full sm:w-2/3 lg:w-full pl-10 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <img src={Sms} alt="Search Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="lg:hidden w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
            onClick={toggleSidebar}
          >
            <i className="icon-menu"></i>
          </button>
          <div className="hidden lg:flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={Bell} alt="Bell Icon" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={Question} alt="Question Icon" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col text-left">
              <span className="text-gray-600 font-semibold">Laurice</span>
              <span className="text-gray-400">@laurice22</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 mx-7"></div>
    </>
  );
};

export default Header;
