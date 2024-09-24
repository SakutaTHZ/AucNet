import React from 'react';

import {
    MdOutlineShoppingCart ,
    MdFavoriteBorder ,
    MdOutlineNotifications 
} from "react-icons/md";
import { FaSearch} from "react-icons/fa";
import cosmoLogo from "../assets/CosmoLogo.svg";
import JapanFlag from "../assets/JapanFlag.svg";
import ProfileDropdown from './ProfileDropDown';

function AucNetNav() {
    return (
        <nav className="flex bg-white justify-between gap-4 align-middle fixed w-screen top-0 left-0 shadow-sm p-32 py-0 z-50">
        <img src={cosmoLogo} alt="Logo" className="w-32 my-3" />
        <div className="navLinks w-1/2 flex items-center">
          <a
            href="#"
            rel="noopener noreferrer"
            className="flex items-center font-bold h-full text-yellow-600 border-b-4 border-b-yellow-600"
          >
            Car Stock
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Make or Model"
              className="pl-10 pr-4 py-2 rounded-md w-72 bg-gray-200 outline-none"
            />
            <FaSearch className="absolute left-3 top-3.5 text-gray-600" />
          </div>
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
            <img src={JapanFlag} alt="Logo" className="pr-1" />
            <span className="text-nowrap">11:42 am</span>
          </div>
          <ProfileDropdown/>
        </div>
      </nav>
    );
  }
  
  export default AucNetNav;