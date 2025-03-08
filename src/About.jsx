import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Facebook02Icon from "../public/facebook.tsx";
import InstagramIcon from "../public/instagram.tsx";
import TwitterIcon from "../public/twitter.tsx";
import LinkedinIcon from "../public/linkedin.tsx";
const About = () => {
  return (
    <div className="min-h-screen bg-[#D9EAFD] text-black font-sans">
      {/* Navbar */}
       <nav className="flex items-end justify-between bg-[#9AA6B2] p-1 sticky top-0 z-50">
                <div className="w-[100px]">
                  <Link to="/">
                    <img src="logo.png" alt="Logo" className="cursor-pointer" />
                  </Link>
                </div>
                <ul className="flex gap-[150px] text-lg pr-8 font-semibold text-black tracking-[3px] items-end pb-1">
                  <li><Link to="/" className="hover:underline">HOME</Link></li>
                  <li><Link to="/about" className="hover:underline">ABOUT</Link></li>
                  <li><Link to="/connect" className="hover:underline">CONNECT</Link></li>
                  <li><Link to="/profile" className="hover:underline">PROFILE</Link></li>
                </ul>
              </nav>

      {/* Overview Section */}
      <motion.section 
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut" }} 
  className="text-center py-16 px-8"
>
  <motion.h1 
    initial={{ scale: 0.8, opacity: 0 }} 
    animate={{ scale: 1, opacity: 1 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-5xl font-bold text-[#E81E25] mb-6"
  >
    KaamMitra - Empowering Local Workers
  </motion.h1>

  <motion.p 
    initial={{ opacity: 0, scale: 1.1 }} 
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 1, ease: "easeOut" }}
    className="text-xl max-w-4xl mx-auto text-gray-700"
  >
    The app aims to <strong>decentralize power</strong> and <strong>generate local employment</strong> by connecting users with nearby service providers within a <strong>1km radius</strong>. Unlike centralized platforms, KaamMitra <strong>empowers local workers</strong> by ensuring they receive direct job requests.
  </motion.p>

  <motion.div 
    initial={{ x: -100, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{ duration: 1, ease: "easeOut" }}
    className="mt-6"
  >
    <img src="workers.png" alt="Overview" className="w-[40%] mx-auto rounded-lg shadow-lg" />
  </motion.div>
</motion.section>


      {/* Key Features */}
      <section className="py-12 px-8">
        <h2 className="text-6xl font-semibold text-center text-[#2D3748] mb-10">KEY FEATURES</h2>
        
        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.15 }}>
            <img className="rounded-[25px] h-[70%]" src="locality.png" alt="userreq" />
            <h3 className="text-2xl font-bold text-[#2D3748] mb-3">User Request System</h3>
            <p className="text-gray-600">Users can request a service like electrician, bakery delivery, or vegetable vendor, and get matched with local providers.</p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.15 }}>
          <img className="rounded-[25px] h-[70%]" src="locationbased.png" alt="Location-Based Matching" />
            <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Location-Based Matching</h3>
            <p className="text-gray-600">Uses GPS tracking to connect users with nearby service providers in real-time.</p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.15 }}>
          <img className="rounded-[25px] h-[70%]" src="workers.png" alt="userreq" />
            <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Categories of Service Providers</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Free Delivery (Bakers, Grocery Stores)</li>
              <li>Cost Per Visit (Electricians, Plumbers)</li>
              <li>Free Roaming (Vegetable Vendors, Water Suppliers)</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.15 }}>
          <img className="rounded-[25px] h-[70%]" src="reviewrating.png" alt="Rating & Review System" />
            <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Rating & Review System</h3>
            <p className="text-gray-600">Ensures trust and quality by allowing users to rate and review service providers.</p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.15 }}>
          <img className="rounded-[25px] h-[70%]" src="directconnect.png" alt="Direct Communication" />
            <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Direct Communication & Negotiation</h3>
            <p className="text-gray-600">Users and workers can chat or call directly to discuss service requirements.</p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.15 }}>
          <img className="rounded-[25px] h-[70%]" src="multilang.png" alt="Multi-Language" />
            <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Multi-Language Support</h3>
            <p className="text-gray-600">Supports regional languages for better accessibility.</p>
          </motion.div>
        </div>
      </section>
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

export default About;
