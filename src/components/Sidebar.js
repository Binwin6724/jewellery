import React, { useState } from "react";
import "../css/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle function to handle opening/closing of dropdowns
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>

    {!isOpen ? (<button onClick={toggleSidebar} className="toggle-btn">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
    </button>):(console.log())}

      <button onClick={toggleSidebar} className="toggle-btn-in">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        ) : (
          console.log()
        )}
      </button>
      <nav>
        <div className="nav-welcome">
          Welcome to <br />
          Kirali Jewellers <b>Online</b>
        </div>
        <hr />
        <ul>
          <li>
            <div className="parent" onClick={() => toggleDropdown("gold")}>
              GOLD JEWELLERY
              <div>
                {openDropdown === "gold" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                )}
              </div>
            </div>
            {openDropdown === "gold" && (
              <ul className="dropdown" style={{ marginLeft: "45px" }}>
                <li className="drop-item">Gold Purity</li>
                <li className="drop-item">Collection</li>
                <li className="drop-item">Design Style</li>
                <li className="drop-item">Gift by Occasion</li>
                <li className="drop-item">Gift by Relation</li>
                <li className="drop-item">Gender</li>
                <li className="drop-item">Metal Color</li>
              </ul>
            )}
          </li>
          <li>
            <div className="parent" onClick={() => toggleDropdown("diamond")}>
              DIAMOND JEWELLERY
              <div>
                {openDropdown === "diamond" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                )}
              </div>
            </div>
            {openDropdown === "diamond" && (
              <ul className="dropdown" style={{ marginLeft: "45px" }}>
                <li className="drop-item">Shop by Category</li>
                <li className="drop-item">Occasion - Jewellery</li>
                <li className="drop-item">Diamond Purity</li>
                <li className="drop-item">Collection</li>
                <li className="drop-item">Design Style</li>
              </ul>
            )}
          </li>
          <li>
            <div className="parent" onClick={() => toggleDropdown("platinum")}>
              PLATINUM JEWELLERY
              <div>
                {openDropdown === "platinum" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                )}
              </div>
            </div>
            {openDropdown === "platinum" && (
              <ul className="dropdown" style={{ marginLeft: "45px" }}>
                <li className="drop-item">Shop by Category</li>
                <li className="drop-item">Occasion - Jewellery</li>
                <li className="drop-item">Platinum Purity</li>
                <li className="drop-item">Collection</li>
                <li className="drop-item">Design Style</li>
              </ul>
            )}
          </li>
          <li>
            <div className="parent" onClick={() => toggleDropdown("goldcoin")}>
              GOLD COIN
              <div>
                {openDropdown === "goldcoin" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                )}
              </div>
            </div>
            {openDropdown === "goldcoin" && (
              <ul className="dropdown" style={{ marginLeft: "45px" }}>
                <li className="drop-item">1g Gold Coin</li>
                <li className="drop-item">5g Gold Coin</li>
                <li className="drop-item">10g Gold Coin</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
