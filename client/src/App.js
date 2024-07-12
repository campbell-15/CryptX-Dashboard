import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MainContent from "./components/MainContent";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSignedIn) {
      if (location.pathname === "/login") {
        navigate("/app");
      }
    } else {
      if (location.pathname !== "/login") {
        navigate("/");
      }
    }
  }, [isSignedIn, navigate, location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SignedOut>
            <Signup />
          </SignedOut>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/app"
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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
