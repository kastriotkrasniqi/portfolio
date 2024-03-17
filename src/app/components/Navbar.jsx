"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/service", label: "Service" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden relative bg-[#0B0E13] flex justify-between text-white items-center px-4 h-16  border-b border-gray-800 z-10">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-wide">
          BLAZE
        </Link>
        <div
          id="nav-icon1"
          className={`${isOpen && "open"}`}
          onClick={toggleDropdown}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`absolute top-full right-0 bg-black text-white py-8 mt-px px-4 shadow-lg w-full space-y-4 transition-all duration-300}`}
          style={{
            animation: `${
              isOpen ? "growDown" : "growUp"
            } 300ms ease-in-out forwards`,
            transformOrigin: "top center",
          }}
          id="nav-mobile"
        >
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-gray-300 text-base">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full hidden lg:w-1/4 lg:flex flex-col justify-around px-16 py-20">
        <Link href="/" className="text-3xl font-extrabold tracking-widest">
          BLAZE
        </Link>

        <ul className="space-y-2">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`text-gray-500 hover:text-gray-800 text-base ${
                pathname === link.href ? "text-gray-800 font-semibold" : ""
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="outline-none py-3 border-b border-gray-300 w-full focus:border-gray-500"
          />
          <MagnifyingGlassIcon className="absolute w-[18px] h-[18px] right-0 top-[17px] text-gray-500 rotate-90" />
        </div>

        <div className="text-gray-400">
          <p>© 2024 BLAZE</p>
          <p>
            Created by <span className="font-medium">Kastriot Krasniqi</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
