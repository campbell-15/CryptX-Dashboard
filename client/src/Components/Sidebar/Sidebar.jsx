    import React from 'react';
    import './Sidebar.css';

    const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="logo">
            <h1>CryptX</h1>
        </div>
        <nav className="menu">
            <ul>
            <li className="menu-item active">
                <i className="icon overview-icon"></i>
                <span>Overview</span>
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
