import React, { useState } from "react";
import {
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdOutlineNotifications,
} from "react-icons/md";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import cosmoLogo from "../../assets/CosmoLogo.svg";
import JapanFlag from "../../assets/JapanFlag.svg";
import ProfileDropDown from "./ProfileDropDown";

const AucNetNav: React.FC = () => {
  // State to handle burger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex bg-white justify-between gap-4 align-middle fixed w-screen top-0 left-0 shadow-sm px-8 md:px-16 lg:px-32 py-0 z-50">
      <img src={cosmoLogo} alt="Logo" className="w-32 my-3" />

      {/* Burger Menu Icon for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Main Menu */}
      <div
        className={`animate-slideLeft md:animate-appear burgerNavs px-8 pb-4 md:pb-0 md:px-0 flex-col md:flex-row gap-5 w-full justify-between md:flex md:pl-4 absolute md:static top-16 left-0 md:left-auto bg-white md:bg-transparent md:w-full transition-all duration-300 ease-in-out shadow-lg md:shadow-none z-40 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <div className="navLinks w-full py-2 flex flex-col gap-4 flex-start md:flex-row items-center md:justify-start">
          <a
            href="/home"
            rel="noopener noreferrer"
            className="flex w-full md:w-auto md:h-full justify-center items-center font-bold text-yellow-600 border-b-4 border-b-yellow-600"
          >
            Car Stock
          </a>
          <a
            href="/home"
            rel="noopener noreferrer"
            className="flex w-full md:w-auto md:h-full justify-center items-center font-bold"
          >
            Flow
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search by Make or Model"
              className="pl-10 pr-4 py-2 rounded-md w-full md:w-72 bg-gray-50 outline-none"
            />
            <FaSearch className="absolute left-3 top-3.5 text-gray-600" />
          </div>
          <div className="flex mt-4 md:mt-0 gap-8 w-full md:w-auto justify-between">
            <div className="flex gap-4 px-4">
              <button>
                <MdOutlineShoppingCart size={24} />
              </button>
              <button>
                <MdFavoriteBorder size={24} />
              </button>
              <button className="relative">
                <MdOutlineNotifications size={24} />
                <span className="absolute bottom-5 bg-red-600 text-white rounded-full px-1 text-xs">
                  99+
                </span>
              </button>
            </div>
            <div className="flex justify-center">
              <img src={JapanFlag} alt="Flag" className="pr-1" />
              <span className="text-nowrap">11:42 am</span>
            </div>
            <ProfileDropDown/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AucNetNav;
