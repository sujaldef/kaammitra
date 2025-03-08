import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Facebook02Icon from "../public/facebook.tsx";
import InstagramIcon from "../public/instagram.tsx";
import TwitterIcon from "../public/twitter.tsx";
import LinkedinIcon from "../public/linkedin.tsx";
const ProviderDetail = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(100, ((windowHeight - rect.top) / rect.height) * 100)
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#D9EAFD] text-black">
      {/* Navbar */}
      <nav className="flex items-end justify-between bg-[#9AA6B2] p-1 sticky top-0 z-50">
        <div className="w-[100px]">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="cursor-pointer" />
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

      {/* Hero Section */}
      <div className="flex h-[400px]">
        <div className="w-1/2 pl-8 pt-[170px]">
          <h1 className="text-7xl font-bold text-left">MORE WORK</h1>
          <h1 className="text-7xl font-bold text-left">
            <span className="text-[#E81E25]">NO MIDDLEMAN!</span>
          </h1>
        </div>
        <div className="w-1/2 h-[50%] mt-[90px] m-4 pt-50  flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img src="setprofile.jpg" className="w-[50%] rounded-lg" alt="" />
            <Link to="/providersetprofile">
            <button className="bg-[#9AA6B2] text-white px-16 py-2 text-2xl rounded-[25px] font-semibold m-10 hover:bg-gray-700">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div
        ref={containerRef}
        className="w-full mb-[100px] flex flex-col items-start px-10 mt-20"
      >
        <h1 className="text-4xl font-bold mb-10">Why Us?</h1>
        <div className="relative flex justify-center w-full">
          <div className="absolute left-1/2 -translate-x-1/2 w-2 bg-gray-300 rounded-lg h-full">
            <motion.div
              className="absolute left-0 w-2 bg-blue-500 rounded-lg"
              initial={{ height: 0 }}
              animate={{ height: `${scrollProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="relative w-[80%]  flex flex-col items-center gap-12">
            <ServiceCard
              title="More Work, No Middlemen"
              text="Get direct job opportunities from people nearby, with no commissions or hidden cuts!
"
              image="/morework.jpg"
              align="left"
            />
            <ServiceCard
              title="Work in Your Area"
              text="Get listed and hired by customers in your locality, reducing travel time and costs.
"
              image="/locality.jpg"
              align="right"
            />
            <ServiceCard
              title=" Earn What You Deserve "
              text="Set your own rates, negotiate directly, and take home 100% of your earnings.
"
              image="/earn.jpg"
              align="left"
            />
            <ServiceCard
              title="Instant Connections"
              text="No long processes! Simply register, get verified, and start receiving job requests."
              image="/connections.jpg"
              align="right"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
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

const ServiceCard = ({ title, text, image, align }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`w-full flex ${
        align === "left" ? "justify-start" : "justify-end"
      } mb-20 items-center`}
      initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
      animate={controls}
      transition={{ duration: 0.9 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-[40%] flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="w-[100%] rounded-lg h-[300px] mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

export default ProviderDetail;
