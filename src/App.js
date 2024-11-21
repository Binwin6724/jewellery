import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import HomePage from "./components/HomePage";
import SplashScreen from "./components/SplashScreen";
import GoToTopButton from "./components/GoToTopButton";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (<div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <TopNav />
        <div className="content">
          <HomePage />
        </div>
        <GoToTopButton />
      </div>)}</>

  );
}
export default App;
