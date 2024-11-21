import React, { useState, useEffect } from "react";
import "../css/GoToTopButton.css"; // Add the CSS below in this file

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`go-top-button ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <span>↑</span>
    </div>
  );
};

export default GoToTopButton;
