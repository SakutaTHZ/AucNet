import React, { useState } from 'react';
import {
    MdOutlineShoppingCart,
    MdOutlinePersonOutline,
    MdFavoriteBorder,
    MdLogout,
  } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle button clicks and navigate to respective pages
  const handleNavigation = (path) => {
    setIsOpen(false); // Close the dropdown after navigating
  };

  return (
    <div className="relative inline-block text-left">
      {/* Profile and Chevron */}
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="profile border-2 border-gray-400 rounded-full">
          <MdOutlinePersonOutline size={24} className="text-gray-400" />
        </div>
        <FaChevronDown size={14} className="text-gray-400" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              className="flex items-center gap-1 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <MdOutlineShoppingCart size={20} />My basket
            </button>
            <button
              className="flex items-center gap-1 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <MdFavoriteBorder size={20} />Favorites
            </button>
            <button
              className="flex items-center gap-1 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <MdLogout size={20}/>Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;