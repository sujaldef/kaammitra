import React, { useState, useRef, useEffect } from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ChevronDown, ChevronUp } from "lucide-react";
import Facebook02Icon from "../public/facebook.tsx";
import InstagramIcon from "../public/instagram.tsx";
import TwitterIcon from "../public/twitter.tsx";
import LinkedinIcon from "../public/linkedin.tsx";
const SeekerDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    // Check if content overflows
    if (containerRef.current) {
      setIsOverflowing(
        containerRef.current.scrollHeight > containerRef.current.clientHeight
      );
    }
  }, [isExpanded]);
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
      <div className="flex h-[700px]">
        <div className="w-1/2 pl-8 pt-[170px] items-center justify-center">
          <h1 className="text-7xl font-bold text-left">SERVICE</h1>
          <h1 className="text-7xl font-bold text-left">FROM YOUR</h1>
          <h1 className="text-7xl font-bold text-left">
            <span className="text-[#E81E25]">NEIGHBOURHOOD!</span>
          </h1>
          <div className="mt-20 text-2xl flex tracking-[3px] gap-[80px]">
            <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700">
              SERVICE AT YOUR DOORSTEP
            </button>

            <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700">
              SUPPORT LOCAL EMPLOYMENT
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="door.png"
            alt="Workforce"
            className="rounded-[45px] w-[80%]"
          />
        </div>
      </div>
      <div className="min-h-screen bg-[#D9EAFD] text-black">
        {/* Main Grid Section */}
        <div className="flex flex-col items-center justify-center">
          {/* Outer Container - Expands Dynamically */}
          <div
            ref={containerRef}
            className={`bg-[#BCCCDC] w-[90%] rounded-[75px] p-5 grid grid-cols-3 gap-4 transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-fit" : "max-h-[800px]"
            }`}
          >
            {/* Manually Placed Grid Items */}

            <div className="bg-white h-[300px] flex flex-col items-center justify-center p-6 m-4 rounded-lg shadow-md">
              <img
                src="elect.png"
                alt="electrician"
                className="rounded-[45px] w-[50%] mb-4"
              />
              <div className="flex-grow"></div> {/* Pushes the button down */}
              <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700 mt-auto">
                BOOK NOW
              </button>
            </div>
            <div className="bg-white h-[300px] flex flex-col items-center justify-center p-6 m-4 rounded-lg shadow-md">
              <img
                src="doctor.png"
                alt="doctor"
                className="rounded-[45px] w-[70%] mb-4"
              />
              <div className="flex-grow"></div> {/* Pushes the button down */}
              <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700 mt-auto">
                BOOK NOW
              </button>
            </div>
            <div className="bg-white h-[300px] flex flex-col items-center justify-center p-6 m-4 rounded-lg shadow-md">
              <img
                src="vege.png"
                alt="vegetable vendor"
                className="rounded-[45px] w-[70%] mb-4"
              />
              <div className="flex-grow"></div> {/* Pushes the button down */}
              <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700 mt-auto">
                BOOK NOW
              </button>
            </div>
            <div className="bg-white h-[300px] flex flex-col items-center p-6 m-4 rounded-lg shadow-md">
              <img
                src="chief.png"
                alt="chief"
                className="rounded-[45px] w-[70%]"
              />
              <div className="flex-grow"></div> {/* Pushes the button down */}
              <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700 mt-auto">
                BOOK NOW
              </button>
            </div>

            <div className="bg-white h-[300px] flex flex-col items-center justify-center p-6 m-4 rounded-lg shadow-md">
              <img
                src="helper.png"
                alt="helper"
                className="rounded-[45px] w-[60%] mb-4"
              />
              <div className="flex-grow"></div> {/* Pushes the button down */}
              <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700 mt-auto">
                BOOK NOW
              </button>
            </div>
            <div className="bg-white h-[300px] flex flex-col items-center justify-center p-6 m-4 rounded-lg shadow-md">
              <img
                src="kirana.png"
                alt="kirana"
                className="rounded-[45px] w-[50%] mb-4"
              />
              <div className="flex-grow"></div> {/* Pushes the button down */}
              <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700 mt-auto">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#9AA6B2] h-[200px] p-5 ">
       
       <div className="text-center text-white"> <p>© 2025 KaamMitra | All Rights Reserved</p>
         </div>
         <div className="flex ">
           <img src="logo.png" className="w-[8%] h-[1%] " alt="" />
           <div className="pl-50 ">
             <h1 className="text-2xl"> COMPANY</h1>
             <div>
               <h2>about us</h2>
               <h2>terms and condition</h2>
               <h2>about us</h2>
               <h2>about us</h2>
             </div>
           </div>
           <div className="pl-60">
             <h1 className="text-2xl">SOCIAL MEDIA</h1>
             <div className="flex space-x-24 mt-10 text-black text-[32px]">
   <Facebook02Icon className="text-black" width={32} height={32} />
   <InstagramIcon className="text-black" width={32} height={32} />
   <LinkedinIcon className="text-black" width={32} height={32} />
   <TwitterIcon className="text-black" width={32} height={32} />
 </div>
 
           </div>
         </div>
       </footer>
    </div>
  );
};

export default SeekerDetail;
