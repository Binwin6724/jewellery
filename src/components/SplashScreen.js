import React from "react";
import "../css/SplashScreen.css";
import Diamond from "../assets/diamond-logo.png";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={Diamond} alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
