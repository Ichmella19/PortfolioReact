import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/images/Icon.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#EEEBE5] py-4 border-b border-[2px] text-white fixed top-0 left-0 z-50 font-manrope">
      <div className="w-full mx-auto flex items-center justify-between px-4 md:px-8 lg:px-[100px]">
        {/* Logo */}
        <p className="text-[#5700FF] text-[16px] font-semibold">Jeffery Cannon.</p>

        {/* Burger menu button - mobile only */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#333]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex flex-row gap-10 font-medium text-[16px] items-center text-[#333333]">
            <li className="relative cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="relative cursor-pointer">
              <Link to="/AboutMe">About Me</Link>
            </li>
            <li className="relative cursor-pointer">
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="relative cursor-pointer">
              <Link to="/Contact">Contact Me</Link>
            </li>
            <button className="flex gap-x-2 p-3 bg-[#5700FF] text-white rounded-[8px]">
              <img src={Icon} alt="" />
              <p className="text-[16px]">Book a call</p>
            </button>
          </ul>
        </nav>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="lg:hidden bg-[#EEEBE5] w-full px-6 py-4">
          <ul className="flex flex-col gap-4 text-[#333333] text-[16px] font-medium">
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/AboutMe" onClick={toggleMenu}>About Me</Link>
            </li>
            <li>
              <Link to="/Portfolio" onClick={toggleMenu}>Portfolio</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={toggleMenu}>Contact Me</Link>
            </li>
            <li>
              <button className="flex gap-x-2 p-3 bg-[#5700FF] text-white rounded-[8px]">
                <img src={Icon} alt="icon" />
                <p className="text-[16px]">Book a call</p>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
