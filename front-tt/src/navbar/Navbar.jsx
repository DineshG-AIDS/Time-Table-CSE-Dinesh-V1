// import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./navbar.css";
import Logo from "../LOGO.svg";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [code, setCode] = useState("");
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedLink, setSelectedLink] = useState("");

//   const handleLinkClick = (link) => {
//     setModalOpen(true);
//     setSelectedLink(link);
//   };

//   const handleCodeSubmit = () => {
//     // Check the entered code against the correct code for the selected link
//     const isCodeValid = checkCodeValidity(code);

//     if (isCodeValid) {
//       // Close the modal and navigate to the selected link
//       setModalOpen(false);
//       navigate(selectedLink);
//     } else {
//       // Display an alert or handle incorrect code
//       alert("Incorrect code. Please try again.");
//     }
//   };

//   const handleModalClose = () => {
//     // Close the modal without navigating
//     setModalOpen(false);
//   };

//   // Function to check the validity of the entered code
//   const checkCodeValidity = (code) => {
//     console.log(code);
//     // Replace this with your actual code validation logic
//     // For now, let's assume the correct code for each link is the link itself
//     return code === "D<%0" || code === "7@ *";
//   };

//   return (
//     <nav className="navbar sticky" id="navbar">
//       <div className="logo">
//         <Logo />
//       </div>
//       <div className="nav-elements topBotomBordersOut">
//         <ul>
//           <li className="li">
//             <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
//               Home
//             </NavLink>
//           </li>
//           <li onClick={() => handleLinkClick("/viewtables")}>
//             <div className="nav-link">Time Table (class)</div>
//           </li>
//           <li onClick={() => handleLinkClick("/faculty-details")}>
//             <div className="nav-link">Faculty Details</div>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               style={{ textDecoration: "none", color: "black" }}
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//         <button className="signup">
//           <NavLink
//             to="/contact"
//             style={{ textDecoration: "none", color: "white" }}
//           >
//             SIGNUP
//           </NavLink>
//         </button>
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={handleModalClose}
//         contentLabel="Code Entry Modal"
//         className="popup1"
//         overlayClassName="overlay1"
//       >
//         <div className="code-entry-modal">
//           <h3>Enter Your Code</h3>
//           <input
//             className="codein"
//             type="text"
//             placeholder="Enter code"
//             onChange={(e) => setCode(e.target.value)}
//           />
//           <button className="codebu" onClick={handleCodeSubmit}>
//             Enter
//           </button>
//         </div>
//       </Modal>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  // let Links = [
  //   { name: "Home", link: "/" },
  //   { name: "Time Table" },
  //   { name: "Faculty Details", link: "/about" },
  //   { name: "Contact Us", link: "/about" },
  // ];
  let [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link) => {
    setModalOpen(true);
    setSelectedLink(link);
  };

  const handleCodeSubmit = () => {
    const isCodeValid = checkCodeValidity(code);

    if (isCodeValid) {
      setModalOpen(false);
      navigate(selectedLink);
    } else {
      alert("Incorrect code. Please try again.");
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const checkCodeValidity = (code) => {
    console.log(code);
    return code === "D<%0" || code === "7@ *";
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0 p-1">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-1 rounded-2xl">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={Logo} className="w-28 " alt="" />
          {/* <span>Inscribe</span> */}
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <li>
            <a
              href="/"
              className="md:ml-8 md:my-0 my-7 font-semibold cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold cursor-pointer">
            <p
              className="text-gray-800 hover:text-blue-400 duration-500 p-2"
              onClick={() => handleLinkClick("/viewtables")}
            >
              Time Table
            </p>
          </li>
          <li onClick={() => handleLinkClick("/faculty-details")}>
            <div className="text-black md:ml-8 md:my-0 my-7 font-semibold cursor-pointer">
              Faculty Details
            </div>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-black p-2 md:ml-8 md:my-0 my-7 font-semibold cursor-pointer"
            >
              Contact Us
            </NavLink>
          </li>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleModalClose}
            contentLabel="Code Entry Modal"
            className="popup1"
            overlayClassName="overlay1"
          >
            <div className="code-entry-modal">
              <h3>Enter Your Code</h3>
              <input
                className="codein"
                type="text"
                placeholder="Enter code"
                onChange={(e) => setCode(e.target.value)}
              />
              <button className="codebu" onClick={handleCodeSubmit}>
                Enter
              </button>
            </div>
          </Modal>
          <NavLink to="/contact">
            <button
              className="btn bg-blue-600 text-white md:ml-8 font-semibold px-6 py-2 rounded-xl duration-500 md:static"
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              SIGNUP
            </button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
