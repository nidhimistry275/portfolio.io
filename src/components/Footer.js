import React from "react";
import "./FooterStyle.css";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7,
  };
  return (
    <div className="footer">
      Made by Nidhi Mistry <span style={styleSymbol}>©</span> 2025 &nbsp;
      <a
        href="https://x.com/Nidhi_0257"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter style={{ fontSize: "24px" }} />
      </a>
    </div>
  );
}
