import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SeekerDetail from "./SeekerDetail";
import ProviderDetail from "./ProviderDetail";
import About from "./About";
import Connect from "./Connect";
import Profile from "./Profile";
import ProviderSetProfile from "./ProviderSetProfile";
import Facebook02Icon from "../public/facebook.tsx";
import InstagramIcon from "../public/instagram.tsx";
import TwitterIcon from "../public/twitter.tsx";
import LinkedinIcon from "../public/linkedin.tsx";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#D9EAFD] text-black">
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
      <div className="flex h-[700px]">
        <div className="w-1/2 pl-10 pt-[170px] items-center justify-center">
          <h1 className="text-7xl font-bold text-left">YOUR</h1>
          <h1 className="text-7xl font-bold text-left">
            <span className="text-[#E81E25]">LOCAL</span>
          </h1>
          <h1 className="text-7xl font-bold text-left">TRUSTED WORKFORCE!</h1>
          <div className="mt-20 text-2xl flex tracking-[3px] gap-[80px]">
            {/* Add Links to Navigate to Pages */}
            <Link to="/provider">
              <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700">
                PROVIDE SERVICE
              </button>
            </Link>
            <Link to="/seeker">
              <button className="bg-[#9AA6B2] w-[300px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-gray-700">
                GET SERVICE
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="map.png"
            alt="Workforce"
            className="rounded-[45px] w-[80%]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[100px] m-10 w-[90%] p-10 items-center justify-center bg-[#9AA6B2] rounded-[45px] mx-auto">
        <div className="flex flex-col gap-[100px] m-10 w-[90%] p-10 items-center justify-center bg-[#9AA6B2] rounded-xl mx-auto">
          {/* Container 1 */}
          <div className="h-[600px] bg-[#BCCCDC] w-full rounded-[75px] p-5 flex flex-col">
            <div className="h-[60%] flex items-center justify-center">
              <img
                src="con1.jpg"
                alt="Image 1"
                className="rounded-[155px] w-[60%]"
              />
            </div>
            <div className="h-[40%] flex items-center justify-center">
              <h1 className="text-4xl  text-center">
                KaamMitra empowers local workers by connecting them with nearby
                job opportunities. Hire locally, support livelihoods, and
                strengthen your community!
              </h1>
            </div>
          </div>

          {/* Container 2 */}
          <div className="h-[600px] bg-[#BCCCDC] w-full rounded-[75px] p-5 flex">
            <div className="w-[60%] flex items-center justify-center">
              <h1 className="text-4xl  text-left">
                KaamMitra finds and lists trusted local workers within your area
                based on your needs. Quick, easy, and hassle-free hiring—right
                from your neighborhood!
              </h1>
            </div>
            <div className="w-[40%] flex items-center justify-center">
              <img
                src="con2.jpg"
                alt="Image 2"
                className="rounded-[45px] w-[100%]"
              />
            </div>
          </div>

          {/* Container 3 */}
          <div className="h-[600px] bg-[#BCCCDC] w-full rounded-[75px] p-5 flex">
            <div className="w-[40%] flex items-center justify-center">
              <img
                src="con3.jpg"
                alt="Image 3"
                className="rounded-[45px] w-[100%]"
              />
            </div>
            <div className="w-[60%] flex items-center justify-center">
              <h1 className="text-4xl  text-right">
                Direct Connect & Fair Pay No middlemen, no extra fees! Contact
                workers directly, negotiate rates, and support fair local
                employment.
              </h1>
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seeker" element={<SeekerDetail />} />
        <Route path="/provider" element={<ProviderDetail />} />
        
        <Route path="/providersetprofile" element={<ProviderSetProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
