import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropDownProps {
  options: string[];
  customClass?: string;
  optionClass?: string;
}

const DropDown: React.FC<DropDownProps> = ({ options, customClass, optionClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block text-left z-30 ${customClass}`}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-64 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-md shadow-sm focus:outline-none"
      >
        {selectedOption}
        <FaChevronDown size={14} className="text-gray-400" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`block px-4 py-2 text-left w-full text-gray-700 hover:bg-gray-100 ${optionClass}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
