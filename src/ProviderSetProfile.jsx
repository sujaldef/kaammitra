import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Facebook02Icon from "../public/facebook.tsx";
import InstagramIcon from "../public/instagram.tsx";
import TwitterIcon from "../public/twitter.tsx";
import LinkedinIcon from "../public/linkedin.tsx";
const ProviderSetProfile = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-[#D9EAFD] text-black">
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

      {/* Hero Section */}
      <div className="flex h-[400px]">
        <div className="w-1/2 pl-8 pt-[170px]">
          <h1 className="text-7xl font-bold text-left">SET UP</h1>
          <h1 className="text-7xl font-bold text-left">
            <span className="text-[#E81E25]">YOUR PROFILE</span>
          </h1>
        </div>
        <div className="w-[40%] h-[400px] bg-white mt-[90px] m-4 pt-6 ml-15 rounded-[45px] flex flex-col items-center justify-between relative overflow-hidden">
          {/* Profile Picture */}
          <img
            src="/profilepic.jpg"
            alt="Profile"
            className="w-[300px] h-[300px] rounded-full object-cover border-4 border-[#9AA6B2] absolute"
          />
          {/* Buttons Container */}
          <div className="absolute bottom-[20px] flex w-full justify-center">
            <button className="bg-[#9AA6B2] text-white px-16 py-2 rounded-[25px] font-semibold mx-4 hover:bg-gray-700">
              Upload Photo
            </button>
            <button className="bg-[#9AA6B2] text-white px-16 py-2 rounded-[25px] font-semibold mx-4 hover:bg-gray-700">
              Click Photo
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full flex flex-col items-center mb-10 mt-40 mb-40">
        <div className="relative flex items-center w-[80%]">
          {["Step 1", "Step 2", "Step 3", "Step 4"].map((label, index) => (
            <div key={index} className="relative flex flex-col items-center w-1/4">
              {/* Step Circles */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-all duration-300 ${
                  step > index + 1
                    ? "bg-green-500"
                    : step === index + 1
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              >
                {step > index + 1 ? <FaCheck size={18} /> : index + 1}
              </div>
              {/* Connecting Line */}
              {index < 3 && (
                <div className="absolute top-5 left-[50%] w-full h-1 bg-gray-300 -z-10">
                  <div
                    className={`h-1 transition-all duration-300 ${
                      step > index + 1
                        ? "bg-green-500 w-full"
                        : step === index + 1
                        ? "bg-blue-500 w-1/2"
                        : "bg-gray-300"
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mt-10 p-5 w-[50%] bg-white shadow-md rounded-md">
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="border p-2 rounded" />
              <input type="text" placeholder="Number" className="border p-2 rounded" />
              <input type="email" placeholder="Email (if any)" className="border p-2 rounded" />
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Profession" className="border p-2 rounded" />
              <input type="text" placeholder="Address" className="border p-2 rounded" />
              <input type="text" placeholder="Shop Name (if any)" className="border p-2 rounded" />
              <input type="text" placeholder="Cost" className="border p-2 rounded" />
            </div>
          )}
          {step === 3 && (
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col items-center border p-4 rounded">
                  <img src="/placeholder.jpg" alt="Placeholder" className="w-20 h-20 object-cover rounded" />
                  <input type="text" placeholder="Enter text" className="border p-2 rounded mt-2" />
                </div>
              ))}
            </div>
          )}
          {step === 4 && (
            <div className="text-center">
              <p className="text-xl font-semibold">You're done!</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-5 flex justify-between">
            {step > 1 && (
              <button onClick={prevStep} className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700">
                Previous
              </button>
            )}
            {step < 4 ? (
              <button onClick={nextStep} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Next
              </button>
            ) : (
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700">
                Done
              </button>
            )}
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

export default ProviderSetProfile;
