import React from "react";
import "./HomeBannerStyle.css";
import cartoon from "../images/mainIconsdark.svg";

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}>
      <div className="content">
        <div className="wrapper">
          <div className="name">Nidhi Mistry</div>
          <div className="staticTitle">
            Software
            <div className="hrLine"></div>
          </div>
          <ul className="dynamicTitle">
            <li>
              <span>Developer</span>
            </li>
          </ul>
          <a
            className="btn"
            href="https://drive.google.com/file/d/1-pRKDOPzMOw82cs_Rs4t_YgqO_ZJEvs2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume &nbsp;&nbsp;<b>&#8594;</b>
          </a>
        </div>
      </div>
      <div className="mask">
        <img className="bg" src={cartoon} alt="girl-with-laptop" />
      </div>
    </div>
  );
}
