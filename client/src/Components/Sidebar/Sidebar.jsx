import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebar__logo">
            <img src="logo.png" alt="CryptX Logo" />
        </div>
        <nav className="sidebar__nav">
            <ul>
            <li className="sidebar__item active">
                <i className="icon-overview"></i>
                <span>Overview</span>
            </li>
            <li className="sidebar__item">
                <i className="icon-chart"></i>
                <span>Chart</span>
            </li>
            <li className="sidebar__item">
                <i className="icon-transactions"></i>
                <span>Transactions</span>
            </li>
            <li className="sidebar__item">
                <i className="icon-wallet"></i>
                <span>Wallet</span>
            </li>
            <li className="sidebar__item">
                <i className="icon-mailbox"></i>
                <span>Mail Box</span>
            </li>
            <li className="sidebar__item">
                <i className="icon-settings"></i>
                <span>Setting</span>
            </li>
            <li className="sidebar__item">
                <i className="icon-logout"></i>
                <span>Logout</span>
            </li>
            </ul>
        </nav>
        </div>
    );
};

export default Sidebar;
