"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const links = document.querySelectorAll("a");
    const cursorOutline = document.querySelector(".cursor-outline");

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;

      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;

      cursorOutline.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 100, fill: "forwards" }
      );
    };

    const onMouseEnterLink = (event) => {
      cursorOutline.style.opacity = 0;
      gsap.to(cursorDot, { width: "80px", height: "80px", opacity: 0.3 });
    };

    const onMouseLeaveLink = (event) => {
      gsap.to(cursorDot, { width: "5px", height: "5px", opacity: 1, cursor: "none" });
      cursorOutline.style.opacity = 1;
    };

    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
  });

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );
};

export default Mouse;
