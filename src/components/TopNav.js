// TopNav.js
import React from "react";
import "../css/TopNav.css";

const TopNav = () => {
  return (
    <header className="topnav">
      <div className="logo">
        <img
          alt="logo-img"
          src="https://www.josalukkasonline.com/assets/images/header/logo-red.png"
        />
      </div>

      <div className="nav-center">
        <img
          src="https://www.josalukkasonline.com/assets/images/header/chains.svg"
          alt="temp-img"
          className="icon"
        />
        <div className="animated-text">TRENDY COLLECTION</div>
        <div className="search-bar">
          <input type="text" placeholder="SEARCH FOR JEWELLERY" />
        </div>

        <img
          src="https://www.josalukkasonline.com/assets/images/header/express-delivery.gif"
          alt="delivery"
          className="delivery-icon"
        />

        <div className="login-signup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="#8B0000"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          Login/SignUp
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="heart-icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#8B0000"
          className="bi bi-basket-fill basket-icon"
          viewBox="0 0 16 16"
        >
          <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z" />
        </svg>
      </div>
    </header>
  );
};

export default TopNav;
