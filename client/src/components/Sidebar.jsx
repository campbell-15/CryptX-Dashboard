// import React from "react";
// import {
//   Logo,
//   Sqaure,
//   Logout,
//   Settings,
//   Sms,
//   Wallet,
//   Wallet2,
//   Graph,
// } from "../assets";

import React, { useState } from 'react';
// import '../components/Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                <i className={`fas ${isOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
            </div>
            <div className="logo">
                <h1>CryptX</h1>
            </div>
            <nav className="menu">
                <ul>
                    <li className="menu-item active">
                        <i className="icon overview-icon"></i>
                        <span className='overview'>Overview</span>
                    </li>
                    <li className="menu-item">
                        <i className="icon chart-icon"></i>
                        <span>Chart</span>
                    </li>
                    <li className="menu-item">
                        <i className="icon transactions-icon"></i>
                        <span>Transactions</span>
                    </li>
                    <li className="menu-item">
                        <i className="icon wallet-icon"></i>
                        <span>Wallet</span>
                    </li>
                    <li className="menu-item">
                        <i className="icon mailbox-icon"></i>
                        <span>Mail Box</span>
                    </li>
                    <li className="menu-item">
                        <i className="icon settings-icon"></i>
                        <span>Setting</span>
                    </li>
                    <li className="menu-item">
                        <i className="icon logout-icon"></i>
                        <span>Logout</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
