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
          <div className="w-8 h-8 mr-2">
            <img src={Sqaure} alt="CryptX Logo" />
          </div>
          Overview
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 mr-2">
            {" "}
            <img src={Graph} alt="CryptX Logo" />
          </div>
          Chart
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 mr-2">
            {" "}
            <img src={Wallet2} alt="CryptX Logo" />
          </div>
          Transactions
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 mr-2">
            {" "}
            <img src={Wallet} alt="CryptX Logo" />
          </div>
          Wallet
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 mr-2">
            {" "}
            <img src={Sms} alt="CryptX Logo" />
          </div>
          Mail Box
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 mr-2">
            {" "}
            <img src={Settings} alt="CryptX Logo" />
          </div>
          Setting
        </li>
        <li className="mb-4 flex items-center">
          <div className="w-8 h-8 mr-2">
            {" "}
            <img src={Logout} alt="CryptX Logo" />
          </div>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
