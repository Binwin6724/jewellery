import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import HomePage from "./components/HomePage";
import SplashScreen from "./components/SplashScreen";
import GoToTopButton from "./components/GoToTopButton";
import Admin from "./admin/components/Admin";
import AdminSidebar from "./admin/components/AdminSidebar";
import Users from "./admin/components/Users";
import Settings from "./admin/components/Settings";
import Logs from "./admin/components/Logs";
import Dashboard from "./admin/components/Dashboard";
import Products from "./admin/components/Products";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        {/* Main App Layout */}
        <Route
          path="/"
          element={
            <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
              <TopNav />
              <div className="content">
                <HomePage />
              </div>
              <GoToTopButton />
            </div>
          }
        />

        {/* Admin Page Layout */}
        <Route
          path="/admin-of-kirali-jewellers/*"
          element={
            <div className="admin-container">
              <AdminSidebar />
              <div className="admin-content">
                <Routes>
                  <Route path="*" element={<Admin />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="products" element={<Products />} />
                  <Route path="users" element={<Users />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="logs" element={<Logs />} />
                </Routes>
              </div>
            </div>
          }
        />

        {/* Catch-all Route for Undefined Paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
