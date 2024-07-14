import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search type of keywords" />
                <i className="fas fa-search search-icon"></i>
            </div>
            <div className="icons-container">
                <i className="fas fa-bell notification-icon"></i>
                <i className="fas fa-question-circle help-icon"></i>
                <div className="profile-container">
                    <div className="profile-pic"></div>
                    <div className="profile-info">
                        <span className="profile-name">Laurice</span>
                        <span className="profile-username">@laurice22</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
