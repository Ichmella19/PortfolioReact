import React from 'react'
import { Link } from "react-router-dom";
import Container from "../assets/images/container.png";
import Linkdin from "../assets/images/linkdin.png";
import Twitter from "../assets/images/twitter.png";
import Rond from "../assets/images/rond.png";
import Mail from "../assets/images/mail.png";
import Telephone from "../assets/images/telephone.png";
import Location from "../assets/images/location.png";
export default function Footer() {
  return (
    <footer className="py-[30px] bg-[#EEEBE5] px-6 md:px-[100px]">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
    <p className="text-[#5700FF] text-[16px] font-semibold">Jeffery Cannon.</p>

    <nav>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-[18px] items-center text-[#333333] text-center">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/AboutMe">About Me</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/Contact">Contact Me</Link>
        </li>
      </ul>
    </nav>

    <div className="flex gap-x-2">
      <img src={Linkdin} alt="LinkedIn" />
      <img src={Twitter} alt="Twitter" />
      <img src={Rond} alt="Social Icon" />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row justify-center items-center gap-y-4 lg:gap-x-8 px-4 py-6 text-[16px] text-[#4D4D4D] font-normal border border-[#E1DBD1] rounded-md w-full md:w-fit mx-auto mt-6">
    <div className="flex gap-x-2 items-center">
      <img src={Mail} alt="Mail"  />
      <p className="text-center">jefferycannon@gmail.com</p>
    </div>
    <div className="flex gap-x-2 items-center">
      <img src={Telephone} alt="Phone"  />
      <p className="text-center">+91 91813 23 2309</p>
    </div>
    <div className="flex gap-x-2 items-center">
      <img src={Location} alt="Location"  />
      <p className="text-center">Somewhere in the World</p>
    </div>
  </div>

  <div className="py-[30px]">
    <p className="text-center text-[16px] text-[#4D4D4D]">
      Copyright © 2023 Jeffery Cannon. All rights reserved.
    </p>
  </div>
</footer>

  );
}
