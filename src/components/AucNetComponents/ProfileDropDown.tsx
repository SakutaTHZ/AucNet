import React, { useState } from "react";
import { MdOutlinePersonOutline, MdLogout } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
            <Link
              className="flex items-center gap-1 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              to={"/"}
              onClick={toggleDropdown}
            >
              <MdLogout size={20} />
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
