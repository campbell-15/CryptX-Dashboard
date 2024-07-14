import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import TopBar from './Components/TopBar/TopNav';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <TopBar />
                {/* Other components for the main content */}
            </div>
        </div>
    );
};

export default App;

