import React from "react";
import { Question, Bell } from "../assets";

const Header = ({ toggleSidebar }) => {
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-white">
        <div className="flex items-center w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search type of keywords"
            className="p-2 bg-gray-100 rounded-full w-full lg:w-auto text-gray-600"
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
            <div className="w-8 h-8 mr-4 flex items-center justify-center">
              {" "}
              <img src={Bell} alt="Overview Icon" />
            </div>
            <div className="w-8 h-8 mr-4 flex items-center justify-center">
              {" "}
              <img src={Question} alt="Overview Icon" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
            <div className="text-gray-600 font-semibold mr-1">Laurice</div>
            <div className="text-gray-400">@laurice22</div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 mx-7"></div>
    </>
  );
};

export default Header;
