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
      const link = event.target;
      if (link.classList.contains("cursorrito")) {
        gsap.set(cursorOutline, { opacity: 0 });
        gsap.to(cursorDot, { scale: 15, opacity: 0.3 });
      }
    };

    const onMouseLeaveLink = (event) => {
      const link = event.target;
      if (link.classList.contains("cursorrito")) {
        gsap.to(cursorDot, { scale: 1, opacity: 1, cursor: "none" });
        gsap.set(cursorOutline, { opacity: 1 });
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []); // Empty dependency array for mounting and unmounting

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );
};

export default Mouse;
