import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MainContent from "./components/MainContent";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <SignedIn>
              <div className="flex h-screen">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-1 flex flex-col">
                  <Header toggleSidebar={toggleSidebar} />
                  <div className="flex-1 overflow-auto">
                    <MainContent />
                  </div>
                </div>
              </div>
            </SignedIn>
          }
        />
        <Route
          path="*"
          element={
            <SignedOut>
              <Navigate to="/login" />
            </SignedOut>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
