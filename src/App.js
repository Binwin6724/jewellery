import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import HomePage from "./components/HomePage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TopNav />
      <div className="content">
        {/* div content goes here */}
       <HomePage />
      </div>
    </div>
  );
}
export default App;
