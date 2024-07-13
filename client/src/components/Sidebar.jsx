import React from "react";
import { Logo } from "../assets";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-gray-100 w-64 h-screen p-4 fixed lg:static ${
        isOpen ? "block" : "hidden"
      } lg:block`}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold">
          {" "}
          <img src={Logo} alt="CryptX Logo" />
          CryptX
        </div>
        <button className="lg:hidden" onClick={toggleSidebar}>
          <i className="icon-close"></i>
        </button>
      </div>
      <ul>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 bg-purple-500 rounded-full mr-2"></div>
          Overview
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
          Chart
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
          Transactions
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
          Wallet
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
          Mail Box
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
          Setting
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
