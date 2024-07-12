import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 h-screen p-4">
      <div className="text-2xl font-bold mb-6">CryptX</div>
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
