import React, { useEffect, useState } from "react";
import { Question, Bell, Search } from "../assets";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = ({ toggleSidebar }) => {
  const { firstName, lastName } = useUser();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (firstName && lastName) {
      setUserName(`${firstName} ${lastName}`);
    } else {
      setUserName("Loading..."); 
    }
  }, [firstName, lastName]);

  return (
    <>
      <div className="flex justify-between items-center p-5 bg-white relative">
        <div className="flex items-center w-full lg:w-1/3 relative mr-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search type of keywords"
              className="p-2 bg-white rounded-xl pr-10 pl-4 border w-full"
            />
            <img
              src={Search}
              alt="Search Icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="lg:hidden w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center"
            onClick={toggleSidebar}
          >
            <i className="icon-menu"></i>
          </button>
          <div
            className="hidden lg:flex items-center space-x-3"
            style={{ marginRight: "56px" }}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={Bell} alt="Bell Icon" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={Question} alt="Question Icon" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 ">
              <UserButton className="w-full h-full" />
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-gray-600 font-semibold">{userName}</span>
              <span className="text-gray-400">@{userName.toLowerCase()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 mx-7"></div>
    </>
  );
};

export default Header;
