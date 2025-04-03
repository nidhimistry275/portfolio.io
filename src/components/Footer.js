import React from "react";
import "./FooterStyle.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Made by Nidhi Mistry <span className="copyright">©</span> 2025
      </p>
      <div className="footer-icons">
        <a
          href="https://x.com/Nidhi_0257"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/nidhi-mistry-2705/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="mailto:mistrynidhi94@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope className="icon" />
        </a>
      </div>
    </footer>
  );
}
