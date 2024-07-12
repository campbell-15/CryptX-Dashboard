import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        {/* Your other components will go here */}
      </div>
    </div>
  );
}

export default App;
