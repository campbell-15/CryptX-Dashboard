import React from "react";
import {
  Logo,
  Sqaure,
  Logout,
  Settings,
  Sms,
  Wallet,
  Wallet2,
  Graph,
} from "../assets";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-gray-100 w-64 h-screen p-6 fixed lg:static z-10 ${
        isOpen ? "block" : "hidden"
      } lg:block`}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-2xl font-bold">
          <img src={Logo} alt="CryptX Logo" className="w-8 h-8 mr-2" />
          CryptX
        </div>
        <button className="lg:hidden" onClick={toggleSidebar}>
          <i className="icon-close"></i>
        </button>
      </div>
      <div className="mt-20"></div>
      <ul className="space-y-6">
        <li className="flex items-center text-lg text-purple-700">
          <img src={Sqaure} alt="Overview Icon" className="w-6 h-6 mr-3" />
          Overview
          <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full"></div>
        </li>
        <li className="flex items-center text-lg">
          <img src={Graph} alt="Chart Icon" className="w-6 h-6 mr-3" />
          Chart
        </li>
        <li className="flex items-center text-lg">
          <img src={Wallet2} alt="Transactions Icon" className="w-6 h-6 mr-3" />
          Transactions
        </li>
        <li className="flex items-center text-lg">
          <img src={Wallet} alt="Wallet Icon" className="w-6 h-6 mr-3" />
          Wallet
        </li>
        <li className="flex items-center text-lg">
          <img src={Sms} alt="Mail Box Icon" className="w-6 h-6 mr-3" />
          Mail Box
        </li>
        <li className="flex items-center text-lg">
          <img src={Settings} alt="Settings Icon" className="w-6 h-6 mr-3" />
          Setting
        </li>
        <li className="flex items-center text-lg">
          <img src={Logout} alt="Logout Icon" className="w-6 h-6 mr-3" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
