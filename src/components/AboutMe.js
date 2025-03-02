import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>
          <span>About Me 🚀💻 </span>{" "}
        </h3>
        <p className="sub-heading">M.S. in Information Technology @ ASU</p>
        <p className="sub-heading">
          📧{" "}
          <a href="mailto:mistrynidhi94@gmail.com" className="email-link">
            mistrynidhi94@gmail.com
          </a>{" "}
          &nbsp;&nbsp;| &nbsp;&nbsp;📍 Tempe, Arizona
        </p>
        <br />
        Hey there! I'm <span>Nidhi Mistry</span>, a passionate software
        developer who loves building sleek, scalable, and user-friendly
        applications. Currently exploring the world of tech as a{" "}
        <span>Master’s student at Arizona State University </span>, I thrive on
        solving problems, crafting seamless user experiences, and bringing ideas
        to life with <span>JavaScript, React.js, Node.js, and AWS</span>.✨
        <br /> <br />
        When I’m not knee-deep in code, you’ll probably find me lost in a good
        book 📚, diving into new ideas, or enjoying a great conversation about
        tech. If you're into web development, cloud computing, or just love
        geeking out over the latest tech trends,{" "}
        <a
          className="resume"
          href="https://www.linkedin.com/in/nidhi-mistry-2705/"
          target="_blank"
          rel="noopener noreferrer"
        >
          let’s connect !🤝
        </a>
      </div>
      <div className="profile-photo">
        <img className="img" src={myProfile} alt="Profile"></img>
      </div>
    </div>
  );
}
