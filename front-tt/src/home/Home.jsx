// Home.js
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Line from "../Line 1.svg";
// import Line2 from "../Line 2.svg";
import Signup from "../signup/Signup";
import fac from "../fac.svg";
import how from "../how.svg";
import video from "../video.svg";
import developer from "../developer.svg";
import Modal from "react-modal";

import "./home.css"; // Import your home styles
import Carousel from "./Carousel";
import ProfileCard from "../Components/ProfileCard";
import ProfileCard1 from "../Components/ProfileCard1";

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowPopup(!showPopup);
    setShowLogin(true);
  };

  return (
    <div className="scroll-container">
      <Navbar />
      <Modal
        isOpen={showPopup}
        onRequestClose={togglePopup}
        contentLabel={showLogin ? "Login Modal" : "Signup Modal"}
        className="popup"
        overlayClassName="overlay"
      >
        <Signup />
      </Modal>
      <div className="pt-20 pl-10">
        <img src={Line} className="sm:w-2/5 w-4/5" alt="line1" />
      </div>
      <div className="sm:text-7xl text-xl pt-10 font-extrabold text-center">
        <p className="sm:text-3xl   ">Your hassle-free solution for creating</p>
        <p className="">
          ORGANIZED <span className="sche">SCHEDULES</span>
        </p>
        <button
          className="text-center sm:text-xl text-sm text-white sm:px-4 p-2 sm:py-4 bg-gray-800 rounded-3xl"
          onClick={togglePopup}
        >
          Get Started
        </button>
      </div>
      <div className="w-2/5 pl-96">{/* <img src={Line2} alt="Line2" /> */}</div>{" "}
      <div className="flex justify-center">
        <div className=" sm:mt-20 mt-5 sm:shadow-custom shadow-custom1 bg-yellow-300 bg-opacity-70 sm:w-66 w-66 sm:text-3xl text-md font-mono p-2 rounded-2xl pl-10 pr-10 text-center">
          <p className=""> LET'S MEET OUR FACULTY</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className=" sm:mt-20 mt-8 sm:w-4/6 w-11/12 sm:mb-12 mb-8 text-center">
          <img src={fac} alt="fac" />
        </div>
      </div>
      {/* <div style={{ marginTop: "-250px" }}>
        <Carousel />
      </div> */}
      <br />
      <div className="flex justify-center">
        <div className=" sm:m sm:shadow-custom shadow-custom1 bg-yellow-300 bg-opacity-70 sm:w-66 w-66 sm:text-3xl text-md font-mono p-2 rounded-2xl pl-10 pr-10 text-center">
          <p className=""> HOW IT WORKS?</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className=" sm:mt-20 mt-8 sm:w-4/6 w-11/12 sm:mb-12 mb-8 text-center">
          <img src={how} alt="fac" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className=" sm:mt-20 mt-8 sm:w-4/6 w-11/12 sm:mb-6mb-4 text-center">
          <img src={video} alt="fac" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" sm:m sm:shadow-custom shadow-custom1 bg-yellow-300 bg-opacity-70 sm:w-66 w-66 sm:text-3xl text-md font-mono p-2 rounded-2xl pl-10 pr-10 text-center">
          <p className=""> DEVELOPER SECTION</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className=" sm:mt-20 mt-8 sm:w-4/6 w-11/12 sm:mb-6mb-4 text-center">
          <img src={developer} alt="fac" />
        </div>
      </div>
      <div className="m-10 pt-10 flex justify-between sm:flex-row flex-col gap-x-20 gap-y-24">
        <ProfileCard />
        <ProfileCard1 />
        {/* <div className="d">
          <div className="profile"></div>
          <p className="dev-name">SANJAY V</p>
          <p className="dev-role">UI/UX DESIGNER</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore{" "}
          </p>
        </div> */}
        {/* <div className="d">
          <div className="profile"></div>
          <p className="dev-name">LALITHA MANGALAM M</p>
          <p className="dev-role">FULL STACK DEVELOPER</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore{" "}
          </p>
        </div> */}
      </div>
    </div>
  );
}
