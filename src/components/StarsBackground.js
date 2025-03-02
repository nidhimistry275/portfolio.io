import React, { useEffect } from "react";
import "./StarsBackground.css";

const StarsBackground = () => {
  useEffect(() => {
    const starContainer = document.querySelector(".stars-background");

    if (!starContainer) return;

    for (let i = 0; i < 120; i++) {
      let star = document.createElement("div");
      star.classList.add("star");

      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";

      starContainer.appendChild(star);
    }
  }, []);

  return <div className="stars-background"></div>;
};

export default StarsBackground;
