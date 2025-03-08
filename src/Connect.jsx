import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Facebook02Icon from "../public/facebook.tsx";
import InstagramIcon from "../public/instagram.tsx";
import TwitterIcon from "../public/twitter.tsx";
import LinkedinIcon from "../public/linkedin.tsx";

const Connect = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setChatMessages([...chatMessages, { user: true, text: userMessage }]);
      setUserMessage("");
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { user: false, text: "We will get back to you soon!" },
        ]);
      }, 1000);
    }
  };

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

      {/* Main Section */}
      <div className="flex flex-row items-center justify-center py-16 px-8 gap-16">
        {/* Left Side - Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src="service.jpg"
            alt="Connect with us"
            className="rounded-lg shadow-lg w-[80%]"
          />
        </div>

        {/* Right Side - FAQ */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            <span className="text-[#E81E25]">CONNECT</span> WITH US
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Have questions? Need help? We're here for you!
          </p>

          {/* FAQ Section */}
          <div className="mt-8">
  <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
  <div className="mt-6">
    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        How does KaamMitra work?
      </summary>
      <p className="mt-2 text-gray-700">
        KaamMitra connects users with nearby service providers based on
        location. You can search for services, contact workers directly, and negotiate terms.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        How can I contact a worker?
      </summary>
      <p className="mt-2 text-gray-700">
        You can use the chat or call feature on the worker's profile page to connect with them directly.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        Is there a service fee for booking workers?
      </summary>
      <p className="mt-2 text-gray-700">
        No, users can connect with workers for free. However, workers may have their own pricing for services.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        How does location-based matching work?
      </summary>
      <p className="mt-2 text-gray-700">
        KaamMitra uses GPS and the OpenCage Geocoder API to find service providers within a **1km radius** of your location.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        Can I rate and review a worker after hiring?
      </summary>
      <p className="mt-2 text-gray-700">
        Yes, after a service is completed, you can rate and review the worker to help other users make informed decisions.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        What languages does KaamMitra support?
      </summary>
      <p className="mt-2 text-gray-700">
        KaamMitra supports multiple languages to make the platform accessible to a wider audience.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        How can workers register on KaamMitra?
      </summary>
      <p className="mt-2 text-gray-700">
        Workers can register by filling out a simple form, providing their skill details, and verifying their identity.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        Does KaamMitra offer emergency services?
      </summary>
      <p className="mt-2 text-gray-700">
        Emergency services are planned for future updates, ensuring urgent help is available when needed.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        How does KaamMitra ensure the quality of workers?
      </summary>
      <p className="mt-2 text-gray-700">
        Workers undergo a **verification process**, and user ratings/reviews help maintain service quality.
      </p>
    </details>

    <details className="mb-4 bg-gray-100 p-3 rounded-lg">
      <summary className="font-semibold cursor-pointer">
        Can I hire multiple workers at once?
      </summary>
      <p className="mt-2 text-gray-700">
        Yes, you can contact multiple workers and hire based on availability and your specific needs.
      </p>
    </details>
  </div>
</div>

        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-16 text-center pb-10">
        <h2 className="text-3xl font-semibold">Need More Help?</h2>
        
       
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

export default Connect;
