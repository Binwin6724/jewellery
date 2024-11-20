import React from "react";
import "../css/Features.css"; // Import custom styles for icons and layout

const Features = () => {
  const features = [
    {
      icon: "fa-shield-alt",
      title: "Safe & Secure Delivery",
    },
    {
      icon: "fa-truck",
      title: "Free Shipping",
    },
    {
      icon: "fa-undo",
      title: "7 Days Return",
    },
    {
      icon: "fa-gem",
      title: "Certified Diamonds",
    },
    {
      icon: "fa-certificate",
      title: "BIS HUID Hallmarked",
    },
    {
      icon: "fa-exchange-alt",
      title: "Easy Exchange",
    },
    {
      icon: "fa-percent",
      title: "Diamond Exchange",
    },
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <i className={`fas ${feature.icon} feature-icon`}></i>
          <p className="feature-title">{feature.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
