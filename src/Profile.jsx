import React, { useState, useRef, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Facebook02Icon from "../public/facebook.tsx";
import InstagramIcon from "../public/instagram.tsx";
import TwitterIcon from "../public/twitter.tsx";
import LinkedinIcon from "../public/linkedin.tsx";
const Profile = () => {
  return (
    <div className="min-h-screen bg-[#D9EAFD] text-black">
    <nav className="flex items-end justify-between bg-[#9AA6B2] p-1 sticky top-0 z-50">
      <div className="w-[100px]">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="cursor-pointer" />
        </Link>
      </div>
      <ul className="flex gap-[150px] text-lg pr-8 font-semibold text-black tracking-[3px] items-end pb-1">
        <li>
          <Link to="/" className="hover:underline">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/connect" className="hover:underline">
            CONNECT
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:underline">
            PROFILE
          </Link>
        </li>
      </ul>
    </nav>
    <div className="text-8xl"><h1>this is profile</h1></div>
    </div>
  );
};

export default Profile;
